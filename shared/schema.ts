import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

// While the site is mostly static, we'll store product categories and basic info
// to allow the frontend to be data-driven and scalable.
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'Lighting Solutions' or 'Switches & Smart Switches'
  imageUrl: text("image_url").notNull(),
  brochureUrl: text("brochure_url").notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  type: text("type").notNull(), // 'Lighting' or 'Switch Installation'
  location: text("location"),
  imageUrl: text("image_url").notNull(),
});

// === BASE SCHEMAS ===
export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });

// === EXPLICIT API CONTRACT TYPES ===
export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

// Request types
export type QuoteRequest = {
  name: string;
  interest: "Lighting" | "Switches" | "Both";
};

// Response types
export type ProductsListResponse = Product[];
export type ProjectsListResponse = Project[];
