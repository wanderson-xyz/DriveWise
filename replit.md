# AutoEscola Prime - Modern Driving School Website

## Overview

AutoEscola Prime is a comprehensive driving school website built as a modern, responsive web application. The project provides a professional platform for a driving school to showcase their services, capture leads, and facilitate customer communication. It features a clean, conversion-focused design with integrated contact forms, service listings, testimonials, and WhatsApp integration for immediate customer engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: React Query (TanStack Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation for robust form management

### Backend Architecture
- **Server**: Express.js with TypeScript for the REST API
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless database provider
- **Validation**: Zod schemas for request/response validation and type inference
- **Development**: Vite for fast development builds and hot module replacement

### Data Layer
- **Schema Design**: Contact management system with fields for name, email, phone, service type, and messages
- **Storage**: In-memory storage implementation (MemStorage) for development, designed to be easily replaceable with database-backed storage
- **Migration System**: Drizzle Kit for database schema migrations and management

### Build System
- **Development**: Vite dev server with React plugin and runtime error overlay
- **Production**: Vite build for frontend, esbuild for backend bundling
- **Code Quality**: TypeScript strict mode with comprehensive type checking

### Component Architecture
- **Design System**: Comprehensive UI component library based on Radix UI primitives
- **Layout**: Modular section-based components (Hero, Features, About, Services, Testimonials, Contact)
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: Built-in accessibility features through Radix UI components

## External Dependencies

### Database and Hosting
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Replit**: Development and hosting platform with integrated environment setup

### UI and Styling
- **Radix UI**: Comprehensive collection of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets including WhatsApp branding

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking for improved code quality
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing for Tailwind and autoprefixer

### Communication Integration
- **WhatsApp Business API**: Direct integration for instant customer communication
- **Email Integration**: Prepared for email service integration (currently logging to console)

### Validation and Forms
- **Zod**: Runtime type validation and schema definition
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### Additional Libraries
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **CLSX**: Utility for constructing className strings conditionally