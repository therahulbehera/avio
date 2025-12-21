"use server";

import { getPrisma } from "@/prisma/prisma";

// User Queries

const client = await getPrisma();

export async function createUser(
  clerkId: string,
  firstName: string,
  lastName: string,
  email: string
) {
  return await client.user.create({
    data: {
      clerkId,
      firstName,
      lastName,
      email,
      subscription: { create: {} },
    },
    select: { firstName: true, lastName: true },
  });
}

export async function findUser(clerkId: string) {
  return await client.user.findUnique({
    where: { clerkId },
    include: {
      subscription: true,
      integrations: {
        select: {
          id: true,
          token: true,
          expiresAt: true,
          name: true,
        },
      },
    },
  });
}

// Automation Queries

export async function createAutomation(clerkId: string) {
  return await client.user.update({
    where: { clerkId },
    data: {
      automations: { create: { name: "New Automation" } },
    },
  });
}

export async function fetchAutomations(clerkId: string) {
  const user_with_automations = await client.user.findUnique({
    where: { clerkId },
    select: {
      automations: {
        orderBy: { createdAt: "asc" },
        include: {
          keywords: true,
          listener: true,
        },
      },
    },
  });
  return user_with_automations?.automations ?? [];
}

export async function fetchAutomationById(automationId: string) {
  return await client.automation.findUnique({
    where: { id: automationId },
  });
}
