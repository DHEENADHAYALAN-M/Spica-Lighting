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
      name: "Architectural Recessed Light",
      description: "Seamless integration into modern ceiling designs with adjustable beam angles",
      category: "Lighting Solutions",
      imageUrl: "/assets/premium_led_recessed_light_fixture.png",
      brochureUrl: ""
    });
    await storage.createProduct({
      name: "High-Bay LED Luminaire",
      description: "Optimized for large industrial and commercial spaces with superior efficiency",
      category: "Lighting Solutions",
      imageUrl: "/assets/industrial_high-bay_led_luminaire.png",
      brochureUrl: ""
    });
    await storage.createProduct({
      name: "Modern Pendant Fixture",
      description: "Elegant suspended lighting solution for contemporary architectural spaces",
      category: "Lighting Solutions",
      imageUrl: "/assets/modern_pendant_lighting_fixture.png",
      brochureUrl: ""
    });
    await storage.createProduct({
      name: "Smart WiFi Dimmer",
      description: "Glass finish touch controls with WiFi connectivity and app integration",
      category: "Switches & Smart Switches",
      imageUrl: "/assets/smart_wifi_dimmer_control_panel.png",
      brochureUrl: ""
    });
    await storage.createProduct({
      name: "Smart Touch Panel",
      description: "Modern glass surface with intuitive touch controls and automation features",
      category: "Switches & Smart Switches",
      imageUrl: "/assets/smart_touch_switch_panel.png",
      brochureUrl: ""
    });
    await storage.createProduct({
      name: "Home Automation Hub",
      description: "Advanced control system for comprehensive smart home integration",
      category: "Switches & Smart Switches",
      imageUrl: "/assets/smart_home_automation_hub.png",
      brochureUrl: ""
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
