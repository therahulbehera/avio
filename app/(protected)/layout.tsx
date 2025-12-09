import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { UserButton } from "@clerk/nextjs";
import SearchBar from "@/components/ui/searchbar";
import Notification from "@/components/ui/notification";
import { QueryProvider } from "@/components/query-provider";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { PrefetchUserAutomations, PrefetchUserProfile } from "@/lib/prefetch";
// import DynamicBreadcrumb from "@/components/ui/dynamic-bread-crumb";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await PrefetchUserProfile(queryClient);

  await PrefetchUserAutomations(queryClient);

  const dehydratedState = dehydrate(queryClient);
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col w-full m-4 gap-4">
          <div className="flex justify-between items-center">
            <SidebarTrigger />
            <SearchBar />
            <Notification />
            <UserButton />
          </div>
          <QueryProvider dehydratedState={dehydratedState}>
            {children}
          </QueryProvider>
        </div>
      </SidebarProvider>
    </>
  );
}
