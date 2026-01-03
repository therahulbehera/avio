import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avio - Company",
  description: "Learn more about Avio, our team, careers, and latest updates.",
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
