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
      imageUrl: "/assets/premium_led_luminaire.png",
      brochureUrl: "/brochures/Wipro_Lighting_Catalogue_24042025.pdf"
    });
    await storage.createProduct({
      name: "Architectural Recessed Light",
      description: "Seamless integration into modern ceiling designs.",
      category: "Lighting Solutions",
      imageUrl: "/assets/recessed_lighting_fixture.png",
      brochureUrl: "/brochures/Wipro_Lighting_Catalogue_24042025.pdf"
    });
    await storage.createProduct({
      name: "Smart Touch Switch",
      description: "Glass finish touch controls with WiFi connectivity.",
      category: "Switches & Smart Switches",
      imageUrl: "/assets/smart_wifi_switch.png",
      brochureUrl: "/brochures/Wipro_Smart_Switch_Brochure.pdf"
    });
    await storage.createProduct({
      name: "Dimmable Smart Dimmer",
      description: "Precise lighting control via app or touch.",
      category: "Switches & Smart Switches",
      imageUrl: "/assets/smart_dimmer_control.png",
      brochureUrl: "/brochures/Wipro_Smart_Switch_Brochure.pdf"
    });
  }

  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Corporate Headquarters - Tech Park",
      type: "Lighting",
      location: "Bangalore",
      imageUrl: "/assets/corporate_office_lighting.png"
    });
    await storage.createProject({
      title: "Premium Residential Villa",
      type: "Switch Installation",
      location: "Chennai",
      imageUrl: "/assets/luxury_residential_villa.png"
    });
    await storage.createProject({
      title: "Apollo Hospital Wing",
      type: "Lighting",
      location: "Hyderabad",
      imageUrl: "/assets/hospital_medical_facility.png"
    });
  }
}
