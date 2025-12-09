"use server";

import { fetchAutomations } from "./queries";
import { onCurrentUser } from "./user";

export async function getAllAutomations() {
  const user = await onCurrentUser();

  try {
    const create = await fetchAutomations(user.id);
    if (create) return { status: 200, data: "Automations found" };
    return { status: 404, data: "Oops! Something went wrong." };
  } catch (error) {
    console.log("Some error occured in getting all automations. ", error);
    return { status: 500, data: "Internal Server Error" };
  }
  //   try {
  //     const create = await createAutomation(user.id);
  //     if (create) return { status: 200, data: "Automation Created" };
  //     return { status: 404, data: "Oops! Something went wrong." };
  //   } catch (error) {
  //     console.log("Some error occured in getting all automations. ", error);
  //     return { status: 500, data: "Internal Server Error" };
  //   }
}
