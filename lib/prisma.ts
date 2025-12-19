import { PrismaClient } from "./generated/prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}

export type Automation = {
  id: string;
  name: string;
  createdAt: string;
  active: boolean;
  userId: string;
  keywords: string[];
};
