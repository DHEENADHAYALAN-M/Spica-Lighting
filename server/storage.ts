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
    return await db.select().from(products);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const [product] = await db.insert(products).values(insertProduct).returning();
    return product;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db.insert(projects).values(insertProject).returning();
    return project;
  }
}

export const storage = new DatabaseStorage();
