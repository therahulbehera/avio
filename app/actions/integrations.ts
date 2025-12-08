"use server";

import { client } from "@/lib/prisma";

export async function updateIntegration(
  token: string,
  expiresAt: Date,
  id: string
) {
  return await client.integrations.update({
    where: { id },
    data: {
      token,
      expiresAt,
    },
  });
}
