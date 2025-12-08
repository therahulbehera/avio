import React from "react";
import AutomationItemBreadcrumb from "./_components/automation-item-breadcrum";
import { Button } from "@/components/ui/button";
import AutomationItemPageButton from "../_components/automation-item-page-button";

const page = () => {
  return (
    <div className="flex flex-col gap-4 justify-between items-center">
      <div className="flex justify-between items-center w-full">
        <AutomationItemBreadcrumb />
        <AutomationItemPageButton />
      </div>
      <Button
        variant="secondary"
        size="sm"
        className="md:hidden w-full h-14 fixed left-0 bottom-2 rounded-full"
      >
        Activate
      </Button>
    </div>
  );
};

export default page;
