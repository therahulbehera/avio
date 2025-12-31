"use client";

import React, { useState } from "react";
import AutomationItemPageBodyWhen from "./automation-tiem-page-when";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { Automation } from "@prisma/client";
import { useSearchParams } from "next/navigation";

const AutomationItemPageBody = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const automation = queryClient.getQueryData<Automation>([
    "user-automation",
    id,
  ]);

  const isNew = useSearchParams().get("new") === "true";
  const [when, setWhen] = useState(!isNew ? true : false);

  return (
    <div className="w-full h-full">
      {when ? (
        <AutomationItemPageBodyWhen />
      ) : (
        <Button
          className="border-dashed w-full my-4"
          variant={"outline"}
          onClick={() => setWhen(!when)}
        >
          <Plus size={14} /> New trigger
        </Button>
      )}
    </div>
  );
};

export default AutomationItemPageBody;
