"use client";

import { useQuery } from "@tanstack/react-query";
import AutomationListItem from "./automation-list-item";
import { Spinner } from "@/components/ui/spinner";
import { getAllAutomations } from "@/lib/api";

type Automation = {
  id: string;
  name: string;
  createdAt: string;
  active: boolean;
  userId: string;
  keywords: string[];
};

const Automations = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["user-automations"],
    queryFn: () => getAllAutomations(),
    staleTime: 6 * 10 * 1000,
  });

  if (data?.automations?.length == 0)
    return (
      <div className="flex flex-col gap-12 justify-center items-center text-xl p-20">
        <span>No automation found.</span>
      </div>
    );

  return (
    <>
      {isFetching ? (
        <div className="w-full h-full flex justify-center items-center p-20">
          <Spinner />
        </div>
      ) : (
        data?.automations?.map(({ id, name, createdAt }: Automation) => (
          <AutomationListItem
            key={id}
            title={name}
            createdAt={createdAt}
            id={id}
          />
        ))
      )}
    </>
  );
};

export default Automations;
