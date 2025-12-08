import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Pencil } from "lucide-react";
import React from "react";

const AutomationItemBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="flex justify-between items-center gap-2 ">
            <span className="max-w-40 truncate">
              idasdfasdfasdfsasdfasdfasdfadsfasdfasdfsa
            </span>{" "}
            <Pencil size={14} />
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AutomationItemBreadcrumb;
