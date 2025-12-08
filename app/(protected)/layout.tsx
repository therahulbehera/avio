import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { UserButton } from "@clerk/nextjs";
import SearchBar from "@/components/ui/searchbar";
import Notification from "@/components/ui/notification";
// import DynamicBreadcrumb from "@/components/ui/dynamic-bread-crumb";

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
      {/* {SideBar} */}
      <SidebarProvider>
        <AppSidebar slug={slug} />
        <div className="flex flex-col w-full m-4 gap-4">
          <div className="flex justify-between items-center">
            <SidebarTrigger />
            <SearchBar />
            <Notification />
            <UserButton />
          </div>
          {/* <DynamicBreadcrumb /> */}
          {children}
        </div>
      </SidebarProvider>
      {/* {Navigation} */}
    </>
  );
}
