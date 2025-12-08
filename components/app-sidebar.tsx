"use client";
import { Activity, Home, Contact, GitMerge, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubscriptionCard from "./subscriptionCard";

export function AppSidebar({ slug }: { slug: string }) {
  const page = usePathname();
  console.log(slug, page);
  const { open, openMobile, setOpenMobile } = useSidebar();
  const items = [
    {
      title: "Home",
      url: `/dashboard`,
      icon: Home,
    },
    {
      title: "Contacts",
      url: "#",
      icon: Contact,
    },
    {
      title: "Automations",
      url: "automations",
      icon: Activity,
    },
    {
      title: "Integrations",
      url: "/integrations",
      icon: GitMerge,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ];

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <div className="flex justify-center items-center gap-2 px-2 py-6">
          <span className="text-3xl font-bold text-foreground">
            {open ? "Avio" : "A"}
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  // className={cn(
                  //   page === item.url && "bg-primary/10 rounded-md"
                  // )}
                >
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      onClick={() => openMobile && setOpenMobile(!openMobile)}
                    >
                      <item.icon />
                      {open && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* <Separator className="my-4" /> */}
      </SidebarContent>
      <SidebarFooter>
        {open && (
          <>
            <SubscriptionCard />
            <div className="p-4 text-center text-xs text-primary/70">
              &copy; 2024 Avio. All rights reserved.
            </div>
          </>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
