import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from "../shared/schema";
import { z } from "zod";

// Simple in-memory storage for demo (in production, use a database)
const contacts: any[] = [];

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
      const contact = {
        ...validatedData,
        id: Math.random().toString(36).substring(7),
        createdAt: new Date().toISOString(),
      };
      
      contacts.push(contact);
      
      // In a real application, you would send an email here
      console.log("New contact submission:", contact);
      
      return res.json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon.",
        contact: { id: contact.id }
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
      return res.json({ contacts });
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