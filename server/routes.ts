import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.products.list.path, async (_req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Seed data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProducts = await storage.getProducts();
  if (existingProducts.length === 0) {
    await storage.createProduct({
      name: "High-Bay LED Luminaire",
      description: "Optimized for large industrial and commercial spaces.",
      category: "Lighting Solutions",
      imageUrl: "https://images.unsplash.com/photo-1558444458-5c455962cb63",
      brochureUrl: "#"
    });
    await storage.createProduct({
      name: "Architectural Recessed Light",
      description: "Seamless integration into modern ceiling designs.",
      category: "Lighting Solutions",
      imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
      brochureUrl: "#"
    });
    await storage.createProduct({
      name: "Smart Touch Switch",
      description: "Glass finish touch controls with WiFi connectivity.",
      category: "Switches & Smart Switches",
      imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827",
      brochureUrl: "#"
    });
    await storage.createProduct({
      name: "Dimmable Smart Dimmer",
      description: "Precise lighting control via app or touch.",
      category: "Switches & Smart Switches",
      imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15",
      brochureUrl: "#"
    });
  }

  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Corporate Headquarters - Tech Park",
      type: "Lighting",
      location: "Bangalore",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c"
    });
    await storage.createProject({
      title: "Premium Residential Villa",
      type: "Switch Installation",
      location: "Chennai",
      imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
    });
    await storage.createProject({
      title: "Apollo Hospital Wing",
      type: "Lighting",
      location: "Hyderabad",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
    });
  }
}
