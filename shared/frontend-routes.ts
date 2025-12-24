import { z } from "zod";

// Frontend-safe API contract definitions
// No imports from ./schema or database-specific code

// Response schemas - browser compatible
export const productResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
  imageUrl: z.string(),
  brochureUrl: z.string(),
});

export const projectResponseSchema = z.object({
  id: z.number(),
  title: z.string(),
  type: z.string(),
  location: z.string().nullable(),
  imageUrl: z.string(),
});

// API contract definitions
export const api = {
  products: {
    list: {
      method: "GET" as const,
      path: "/api/products",
      responses: {
        200: z.array(productResponseSchema),
      },
    },
  },
  projects: {
    list: {
      method: "GET" as const,
      path: "/api/projects",
      responses: {
        200: z.array(projectResponseSchema),
      },
    },
  },
};

// Error schemas
export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
};

// Utility function for building URLs
export function buildUrl(
  path: string,
  params?: Record<string, string | number>
): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

// Frontend-safe types
export type Product = z.infer<typeof productResponseSchema>;
export type Project = z.infer<typeof projectResponseSchema>;
export type ProductsListResponse = z.infer<typeof api.products.list.responses[200]>;
export type ProjectsListResponse = z.infer<typeof api.projects.list.responses[200]>;
