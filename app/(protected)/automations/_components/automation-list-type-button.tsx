import { cn } from "@/lib/utils";
import React from "react";

const AutomationListTypeButton = ({
  innerText,
  type = "normal",
}: {
  innerText: string;
  type: "normal" | "gradient";
}) => {
  const isNormal = type === "normal";

  return (
    <div
      className={cn(
        !isNormal &&
          "bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 ",
        "p-px rounded-sm bg-neutral-700 max-h-8 "
      )}
    >
      <div className="flex justify-center items-center bg-neutral-900 rounded-sm px-1 text-sm w-full h-full">
        <span
          className={cn(
            !isNormal &&
              "bg-linear-to-r px-1 from-indigo-500 to-pink-500 bg-clip-text text-transparent",
            "text-sm"
          )}
        >
          {innerText}
        </span>
      </div>
    </div>
  );
};

export default AutomationListTypeButton;
