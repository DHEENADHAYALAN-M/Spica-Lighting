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
    const lightingProducts = [
      { name: "Architectural Recessed Light", description: "Seamless integration into modern ceiling designs with adjustable beam angles", imageUrl: "/assets/premium_led_recessed_light_fixture.png" },
      { name: "High-Bay LED Luminaire", description: "Optimized for large industrial and commercial spaces with superior efficiency", imageUrl: "/assets/industrial_high-bay_led_luminaire.png" },
      { name: "Modern Pendant Fixture", description: "Elegant suspended lighting solution for contemporary architectural spaces", imageUrl: "/assets/modern_pendant_lighting_fixture.png" },
      { name: "Track Mounted LED Spotlight", description: "Professional directional lighting for retail and gallery applications", imageUrl: "/assets/track_mounted_led_spotlight.png" },
      { name: "Smart LED Panel Light", description: "Ultra-modern flat geometric design with WiFi control capabilities", imageUrl: "/assets/smart_led_panel_light.png" },
      { name: "Adjustable Downlight Fixture", description: "Recessed installation with precision beam angle adjustment", imageUrl: "/assets/adjustable_downlight_fixture.png" },
      { name: "LED Wall Washer Light", description: "Architectural accent lighting for dramatic wall illumination effects", imageUrl: "/assets/led_wall_washer_light.png" },
      { name: "Dimmable LED Strip Lighting", description: "Architectural linear light with premium aluminum profile construction", imageUrl: "/assets/dimmable_led_strip_lighting.png" },
      { name: "Adjustable Track Light Head", description: "Commercial-grade fixture with sleek black and metallic design", imageUrl: "/assets/adjustable_track_light_head.png" },
      { name: "Dimmable Ceiling Light Fixture", description: "Circular modern design with adjustable brightness control", imageUrl: "/assets/dimmable_ceiling_light_fixture.png" },
      { name: "Premium Recessed Accent Light", description: "High-precision lighting with variable color temperature options", imageUrl: "/assets/premium_led_recessed_light_fixture.png" },
      { name: "Ultra-Bright Commercial LED", description: "Heavy-duty lighting solution for warehouses and industrial facilities", imageUrl: "/assets/industrial_high-bay_led_luminaire.png" },
      { name: "Designer Wall Mount Sconce", description: "Contemporary wall-mounted lighting with premium finish options", imageUrl: "/assets/modern_pendant_lighting_fixture.png" },
      { name: "Architectural Corner Light", description: "Innovative corner-mounted fixture for modern architectural designs", imageUrl: "/assets/smart_led_panel_light.png" },
      { name: "Premium Installation Kit", description: "Complete lighting system with professional installation accessories", imageUrl: "/assets/track_mounted_led_spotlight.png" },
    ];

    const switchProducts = [
      { name: "Smart WiFi Dimmer", description: "Glass finish touch controls with WiFi connectivity and app integration", imageUrl: "/assets/smart_wifi_dimmer_control_panel.png" },
      { name: "Smart Touch Panel", description: "Modern glass surface with intuitive touch controls and automation features", imageUrl: "/assets/smart_touch_switch_panel.png" },
      { name: "Home Automation Hub", description: "Advanced control system for comprehensive smart home integration", imageUrl: "/assets/smart_home_automation_hub.png" },
      { name: "Smart Motion Sensor Switch", description: "Black glass finish with automatic motion detection and WiFi control", imageUrl: "/assets/smart_motion_sensor_switch.png" },
      { name: "Smart Energy Monitoring Switch", description: "Real-time power consumption tracking with intelligent automation", imageUrl: "/assets/smart_energy_monitoring_switch.png" },
      { name: "Smart Voice Controlled Switch", description: "Elegant touch surface with voice assistant integration", imageUrl: "/assets/smart_voice_controlled_switch.png" },
      { name: "Smart Control Panel Display", description: "Large touchscreen display for multi-device smart home management", imageUrl: "/assets/smart_control_panel_display.png" },
      { name: "Premium WiFi Switch Module", description: "High-capacity switching module with advanced automation routines", imageUrl: "/assets/smart_wifi_dimmer_control_panel.png" },
      { name: "Glass Touch Dimmer Switch", description: "Luxury glass finish with smooth dimming and scheduling capabilities", imageUrl: "/assets/smart_touch_switch_panel.png" },
      { name: "Smart Relay Control Unit", description: "Professional-grade switching for large-scale automation systems", imageUrl: "/assets/smart_motion_sensor_switch.png" },
      { name: "Advanced Automation Hub", description: "Central control system for coordinated smart home environments", imageUrl: "/assets/smart_home_automation_hub.png" },
      { name: "Smart Scene Controller", description: "Pre-programmed scenes for lighting and device coordination", imageUrl: "/assets/smart_control_panel_display.png" },
      { name: "Wireless Smart Switch Set", description: "Battery-free wireless switching with instant response times", imageUrl: "/assets/smart_voice_controlled_switch.png" },
      { name: "Smart Temperature & Light Control", description: "Integrated climate and lighting management in one device", imageUrl: "/assets/smart_energy_monitoring_switch.png" },
      { name: "Premium Smart Lighting System", description: "Complete ecosystem of smart switches and dimmer controls", imageUrl: "/assets/smart_wifi_dimmer_control_panel.png" },
    ];

    for (const product of lightingProducts) {
      await storage.createProduct({
        ...product,
        category: "Lighting Solutions",
        brochureUrl: ""
      });
    }

    for (const product of switchProducts) {
      await storage.createProduct({
        ...product,
        category: "Switches & Smart Switches",
        brochureUrl: ""
      });
    }
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
