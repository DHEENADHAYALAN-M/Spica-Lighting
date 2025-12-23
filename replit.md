# Spica Lighting

A React + Express full-stack application for Spica Lighting, an architectural lighting solutions company.

## Overview

This is a business website for Spica Lighting featuring:
- Product catalog display
- Project gallery/portfolio
- Quote request functionality
- Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: React 18 with TypeScript, Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter (client-side)

## Project Structure

```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utilities
│   │   └── pages/       # Page components
│   └── public/          # Static assets
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API routes
│   ├── db.ts         # Database connection
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle schema and types
└── vite.config.ts    # Vite configuration
```

## Development

- Run `npm run dev` to start the development server on port 5000
- The server serves both the API and the React frontend
- Hot module replacement is enabled for development

## Database

Uses PostgreSQL with Drizzle ORM. Schema includes:
- `products` - Product catalog
- `projects` - Project portfolio

Run `npm run db:push` to sync the database schema.

## Production

- Build: `npm run build`
- Start: `npm run start`
