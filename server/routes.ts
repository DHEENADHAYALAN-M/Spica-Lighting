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
      imageUrl: "/assets/high-bay_led_luminaire.png",
      brochureUrl: "/brochures/lighting-brochure.pdf"
    });
    await storage.createProduct({
      name: "Architectural Recessed Light",
      description: "Seamless integration into modern ceiling designs.",
      category: "Lighting Solutions",
      imageUrl: "/assets/architectural_recessed_light.png",
      brochureUrl: "/brochures/lighting-brochure.pdf"
    });
    await storage.createProduct({
      name: "Smart Touch Switch",
      description: "Glass finish touch controls with WiFi connectivity.",
      category: "Switches & Smart Switches",
      imageUrl: "/assets/smart_touch_switch.png",
      brochureUrl: "/brochures/switches-brochure.pdf"
    });
    await storage.createProduct({
      name: "Dimmable Smart Dimmer",
      description: "Precise lighting control via app or touch.",
      category: "Switches & Smart Switches",
      imageUrl: "/assets/smart_dimmer_switch.png",
      brochureUrl: "/brochures/switches-brochure.pdf"
    });
  }

  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Corporate Headquarters - Tech Park",
      type: "Lighting",
      location: "Bangalore",
      imageUrl: "/assets/corporate_tech_park.png"
    });
    await storage.createProject({
      title: "Premium Residential Villa",
      type: "Switch Installation",
      location: "Chennai",
      imageUrl: "/assets/premium_residential_villa.png"
    });
    await storage.createProject({
      title: "Apollo Hospital Wing",
      type: "Lighting",
      location: "Hyderabad",
      imageUrl: "/assets/apollo_hospital_wing.png"
    });
  }
}
