"use server";

import { client } from "@/prisma/prisma";

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
