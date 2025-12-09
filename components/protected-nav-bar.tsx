"use client";

import { UserButton } from "@clerk/nextjs";
import SearchBar from "@/components/ui/searchbar";
import Notification from "@/components/ui/notification";
import { SidebarTrigger } from "./ui/sidebar";

const ProtectedNavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <SidebarTrigger />
      <SearchBar />
      <Notification />
      <UserButton />
    </div>
  );
};

export default ProtectedNavBar;
