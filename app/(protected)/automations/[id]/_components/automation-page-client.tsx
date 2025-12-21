"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import AutomationItemPageButton from "../../_components/automation-item-page-button";
import AutomationItemBreadcrumb from "./automation-item-breadcrum";
import { useQuery } from "@tanstack/react-query";
import { getAutomation } from "@/lib/api";
import { Spinner } from "@/components/ui/spinner";

const AutomationPageClient = ({ id }: { id: string }) => {
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ["user-automations", id],
    queryFn: () => getAutomation(id),
    staleTime: 5 * 60 * 1000,
  });

  if (isFetching)
    return (
      <div className="w-full h-full flex justify-center items-center p-20">
        <Spinner />
      </div>
    );

  if (isFetched && data.status != 200)
    return (
      <div className="w-full h-full flex justify-center items-center p-20">
        <span className="text-lg">Automation not found.</span>
      </div>
    );

  console.log("Message after query ", data);

  const { name, active } = data.automation;

  return (
    <div className="flex flex-col gap-4 justify-between items-center">
      <div className="flex justify-between items-center w-full">
        <AutomationItemBreadcrumb name={name} />
        <AutomationItemPageButton />
      </div>
      <Button
        variant={active ? "default" : "secondary"}
        size="sm"
        className="md:hidden w-full h-14 fixed left-0 bottom-2 rounded-full"
      >
        Activate
      </Button>
    </div>
  );
};

export default AutomationPageClient;
