"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/fetch";
import { updateIntegration } from "./integrations";

export async function onCurrentUser() {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");
  return user;
}

export async function onBoardUser() {
  const user = await onCurrentUser();
  try {
    const found = await findUser(user.id);
    if (found) {
      if (found.integrations.length > 0) {
        const today = new Date();
        const expires = found.integrations[0].expiresAt;
        if (!expires) throw new Error("expiresAt missing");

        const time_left = expires.getTime() - today.getTime();

        const days = Math.round(time_left / (1000 * 3600 * 24));

        if (days < 5) {
          console.log("refresh token!");
          const refresh = await refreshToken(found.integrations[0].token);

          const today = new Date();
          const expiresAt = today.setDate(today.getDate() + 60);

          const update_token = await updateIntegration(
            refresh.access_token,
            new Date(expiresAt),
            found.integrations[0].id
          );

          if (!update_token) {
            console.log("Update token failed");
          }
        }
      }
      return {
        status: 200,
        data: {
          firstName: found.firstName,
          lastName: found.lastName,
        },
      };
    }
    const created = await createUser(
      user.id,
      user.firstName!,
      user.lastName!,
      user.emailAddresses[0].emailAddress
    );

    return { status: 201, data: created };
  } catch (error) {
    console.log(error);
    return { status: 500 };
  }
}

export async function onUserInfo() {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);
    if (profile) return { status: 200, data: profile };
    return { status: 404 };
  } catch (error) {
    return { status: 500 };
    console.log("We're facing an error while finding user: ", error);
  }
}
