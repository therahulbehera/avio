"use client";

import React from "react";
import AutomationItemPageButton from "./automation-item-page-button";
import AutomationItemBreadcrumb from "./automation-item-breadcrum";
import { useQuery } from "@tanstack/react-query";
import { getAutomation } from "@/lib/api";
import { Spinner } from "@/components/ui/spinner";
import AutomationItemPageBody from "./automation-item-page-body";

const AutomationPageClient = ({ id }: { id: string }) => {
  const {
    data: automation,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["user-automation", id],
    queryFn: () => getAutomation(id),
    staleTime: 15 * 60 * 1000,
  });

  if (isFetching)
    return (
      <div className="w-full h-full flex justify-center items-center p-20">
        <Spinner />
      </div>
    );

  if (isError)
    return (
      <div className="w-full h-full flex justify-center items-center p-20">
        <span className="text-lg">Automation not found.</span>
      </div>
    );

  const { name, active } = automation;

  return (
    <div className="flex flex-col gap-4 justify-between items-center">
      <div className="flex justify-between items-center w-full">
        <AutomationItemBreadcrumb id={id} name={name} />
        <AutomationItemPageButton id={id} active={active} />
      </div>
      <AutomationItemPageBody id={id} />
    </div>
  );
};

export default AutomationPageClient;
