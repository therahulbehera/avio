import { Button } from "@/components/ui/button";
import React from "react";

const AutomationItemPageButton = () => {
  return (
    <div className="flex justify-center items-center gap-1">
      <Button variant="outline" size="sm">
        Undo
      </Button>
      <Button variant="outline" size="sm">
        Redo
      </Button>
      <Button variant="secondary" size="sm" className="hidden md:block">
        Activate
      </Button>
    </div>
  );
};

export default AutomationItemPageButton;
