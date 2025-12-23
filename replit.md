# Spica Lighting

A React + Express full-stack application for Spica Lighting, an architectural lighting solutions company.

## Overview

This is a business website for Spica Lighting featuring:
- Product catalog display with dynamic data
- Project gallery/portfolio
- Quote request functionality
- Responsive design with Tailwind CSS
- Centralized asset management for easy image updates

## Tech Stack

- **Frontend**: React 18 with TypeScript, Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter (client-side)

## Project Structure

```
├── client/                 # React frontend
│   ├── public/
│   │   └── assets/        # Image assets (edit here!)
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities
│   │   └── pages/         # Page components
│   └── index.html         # HTML template
├── server/                # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── db.ts             # Database connection
│   └── vite.ts           # Vite dev server integration
├── shared/               # Shared code
│   └── schema.ts         # Drizzle ORM schema and types
├── vite.config.ts        # Vite configuration
├── drizzle.config.ts     # Drizzle ORM config
└── ASSETS_README.md      # Image asset guide
```

## Image Assets

All website images are stored in `/client/public/assets/`. This makes it easy to manage and update images:

- **logo.png** - Company logo (header & favicon)
- **hero-bg.png** - Hero section background
- **lighting-card.jpg** - Lighting category card
- **switches-card.jpg** - Switches category card
- **about-image.jpg** - About page feature image
- **project-luxury-hotel.jpg** - Featured project
- **project-corporate-office.jpg** - Featured project
- **project-smart-home.jpg** - Featured project

To replace any image, simply update the file in `/client/public/assets/` with the same filename.

## Development

```bash
npm run dev        # Start dev server on port 5000
npm run build      # Build for production
npm run db:push    # Sync database schema
```

- Development server runs on `http://localhost:5000`
- Hot module replacement (HMR) is enabled
- API and frontend are served from the same port

## Database

Uses PostgreSQL with Drizzle ORM. Schema includes:
- `products` - Product catalog (name, description, category, imageUrl)
- `projects` - Project portfolio (title, type, location, imageUrl)

Database is auto-synced with schema. Use `npm run db:push` after schema changes.

## Production Deployment

```bash
npm run build      # Creates optimized production build
npm run start      # Serves production build on port 5000
```

The app is configured for autoscale deployment on Replit with proper environment variables.
