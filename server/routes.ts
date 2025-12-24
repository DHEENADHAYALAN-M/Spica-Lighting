import type { Express } from "express";
import { createServer, type Server } from "http";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Static API endpoints - no database required
  // Products and projects are rendered from static frontend data only
  
  return httpServer;
}
