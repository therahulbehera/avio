import { Button } from "@/components/ui/button";
import { useUpdateAutomation } from "@/hooks/useUpdateAutomation";
import React from "react";

const AutomationItemPageButton = ({
  id,
  active,
}: {
  id: string;
  active: boolean;
}) => {
  const { mutate } = useUpdateAutomation(id);

  const handler = () => mutate({ active: !active });
  return (
    <div className="flex justify-center items-center gap-1">
      <Button variant="outline" size="sm">
        Undo
      </Button>
      <Button variant="outline" size="sm">
        Redo
      </Button>
      <Button
        variant={active ? "default" : "secondary"}
        size="sm"
        className="hidden md:block"
        onClick={() => handler()}
      >
        {active ? "Active" : "Inactive"}
      </Button>
      <Button
        variant={active ? "default" : "secondary"}
        size="sm"
        className="md:hidden w-full h-14 fixed left-0 bottom-2 rounded-full"
        onClick={() => handler()}
      >
        {active ? "Active" : "Inactive"}
      </Button>
    </div>
  );
};

export default AutomationItemPageButton;
