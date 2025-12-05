import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { UserButton } from "@clerk/nextjs";

export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <div className="fixed top-6 right-6"></div>
      {/* {SideBar} */}
      <SidebarProvider>
        <AppSidebar slug={slug} />
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center m-6">
            <SidebarTrigger />
            <UserButton />
          </div>
          {children}
        </div>
      </SidebarProvider>
      {/* {Navigation} */}
    </>
  );
}
