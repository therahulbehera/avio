import { getAllAutomations } from "@/app/actions/automations";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await currentUser();

  if (!user)
    return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });

  const result = await getAllAutomations();

  return NextResponse.json(result);
}
