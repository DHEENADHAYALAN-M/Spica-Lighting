import { db } from "./db";
import {
  products,
  projects,
  type Product,
  type InsertProduct,
  type Project,
  type InsertProject,
} from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProjects(): Promise<Project[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  createProject(project: InsertProject): Promise<Project>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    // Static mode - no database required
    return [];
  }

  async getProjects(): Promise<Project[]> {
    // Static mode - no database required
    return [];
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    // Static mode - no database required
    throw new Error("Not implemented in static mode");
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    // Static mode - no database required
    throw new Error("Not implemented in static mode");
  }
}

export const storage = new DatabaseStorage();
