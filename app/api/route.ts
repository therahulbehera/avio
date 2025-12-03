import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const headerList = await headers();
  return Response.json({
    message: "Hello World!",
    req: req.nextUrl,
    status: 200,
    headersList: headerList.get("this"),
  });
}
