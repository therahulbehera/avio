"use client";

import { useQuery } from "@tanstack/react-query";
import AutomationListItem from "./automation-list-item";
import { Spinner } from "@/components/ui/spinner";
import { getAllAutomations } from "@/lib/api";
import { Automation } from "@prisma/client";

const Automations = () => {
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ["user-automations"],
    queryFn: getAllAutomations,
    staleTime: 15 * 60 * 1000,
  });

  if (isFetching)
    return (
      <div className="w-full h-full flex justify-center items-center p-20">
        <Spinner />
      </div>
    );

  if (data?.automations?.length == 0)
    return (
      <div className="flex flex-col gap-12 justify-center items-center text-xl p-20">
        <span>No automation found.</span>
      </div>
    );

  if (isFetched) {
    return data?.map((automation: Automation) => (
      <AutomationListItem key={automation.id} automation={automation} />
    ));
  }
};

export default Automations;
