"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import React from "react";
import AutomationListTypeButton from "./automation-list-type-button";
import Link from "next/link";
import AutomationListItemTag from "./automation-list-item-badges";
import TimeAgo from "./time-ago";
import { useQueryClient } from "@tanstack/react-query";
import { Automation } from "@prisma/client";

const AutomationListItem = ({ automation }: { automation: Automation }) => {
  const { id, name, createdAt } = automation;

  const queryClient = useQueryClient();
  queryClient.setQueryData(["user-automation", id], automation);

  const url = `/automations/${id}`;

  return (
    <Link href={url} className="hover:bg-neutral-700 p-px rounded-xl">
      <Card className="gap-4">
        <CardHeader className="gap-1">
          <CardTitle className="flex justify-between">
            <span>{name}</span>
            <TimeAgo date={createdAt} />
          </CardTitle>
          <CardDescription className="text-neutral-400">
            Description
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between">
          <AutomationListItemTag items={["Yes", "This works!", "Intrested"]} />
          {/* <AutomationListTypeButton innerText={"SmartAI"} type={"gradient"} /> */}
          <AutomationListTypeButton innerText={"Standard"} type={"normal"} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default AutomationListItem;
