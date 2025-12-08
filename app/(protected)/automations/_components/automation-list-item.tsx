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

const AutomationListItem = () => {
  return (
    <Link
      href={"/automations/2121"}
      className="hover:bg-neutral-700 p-px rounded-xl"
    >
      <Card className="gap-4">
        <CardHeader className="gap-1">
          <CardTitle className="flex justify-between">
            <span>Title</span>
            <span className="text-[12px]">Date Created</span>
          </CardTitle>
          <CardDescription className="text-neutral-400">
            Description
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between">
          {/* <div className="flex flex-wrap gap-2 max-w-40">
            <Button
              className="px-2 rounded-full h-6 text-[12px]"
              variant={"outline"}
            >
              Yes
            </Button>
            <Button
              className="px-2 rounded-full h-6 text-[12px]"
              variant={"outline"}
            >
              Let&apos;s Go
            </Button>
            <Button
              className="px-2 rounded-full h-6 text-[12px]"
              variant={"outline"}
            >
              Intrested
            </Button>
            <Button
              className="px-2 rounded-full h-6 text-[12px]"
              variant={"outline"}
            >
              Where do i start?
            </Button>
          </div> */}
          <AutomationListItemTag
            items={[
              "Yes",
              "This works!",
              "Intrested",
              "Where do I start?",
              "somemore words to see the reaction.",
            ]}
          />
          {/* <AutomationListTypeButton innerText={"SmartAI"} type={"gradient"} /> */}
          <AutomationListTypeButton innerText={"Standard"} type={"normal"} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default AutomationListItem;
