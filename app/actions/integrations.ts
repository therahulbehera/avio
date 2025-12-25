"use server";

import { getPrisma } from "@/prisma/prisma";

export async function updateIntegration(
  token: string,
  expiresAt: Date,
  id: string
) {
  const client = await getPrisma();
  return await client.integration.update({
    where: { id },
    data: {
      token,
      expiresAt,
    },
  });
}
