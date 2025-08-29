import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { desc } from 'drizzle-orm';
import { z } from 'zod';
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

// Schema definitions inline to avoid import issues in Vercel
const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

const sql_client = neon(process.env.DATABASE_URL!);
const db = drizzle(sql_client);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      const [newContact] = await db
        .insert(contacts)
        .values(validatedData)
        .returning();
      
      console.log('New contact submission:', newContact);
      
      return res.json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon.",
        contact: { id: newContact.id }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Error creating contact:", error);
        return res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  }

  if (req.method === 'GET') {
    try {
      const allContacts = await db
        .select()
        .from(contacts)
        .orderBy(desc(contacts.createdAt));
      
      return res.json({ contacts: allContacts });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}