import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "@/components/app-sidebar";

import { QueryProvider } from "@/components/query-provider";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { PrefetchUserAutomations, PrefetchUserProfile } from "@/lib/prefetch";
import ProtectedNavBar from "@/components/protected-nav-bar";
import { Toaster } from "sonner";
import { Footer } from "@/components/footer";
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
          <QueryProvider dehydratedState={dehydratedState}>
            <ProtectedNavBar />
            <Toaster position="top-center" richColors theme="system" />
            {children}
          </QueryProvider>
        </div>
      </SidebarProvider>
      <Footer />
    </>
  );
}
