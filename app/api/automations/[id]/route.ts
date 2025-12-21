import { fetchAutomationById } from "@/app/actions/queries";
import { NextRequest, NextResponse } from "next/server";

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!UUID_REGEX.test(id)) {
    return NextResponse.json({ message: "Invalid automation id", status: 400 });
  }

  const automation = await fetchAutomationById(id);

  if (!automation)
    return NextResponse.json({
      status: 404,
      message: "Unable to fetch automation.",
    });

  return NextResponse.json({
    status: 200,
    message: "Successfully fetched the automation.",
    automation,
  });
}
