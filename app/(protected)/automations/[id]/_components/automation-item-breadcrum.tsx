"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useUpdateAutomation } from "@/hooks/useUpdateAutomation";
import { Check, Pencil } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const AutomationItemBreadcrumb = ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  const [automationName, setAutomationName] = useState(name);
  const [isActive, setIsActive] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const mutation = useUpdateAutomation(id);

  useEffect(() => {
    if (isActive) inputRef.current?.focus();
  }, [isActive]);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="/automations">Automations</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="flex justify-between items-center gap-2 ">
            {isActive ? (
              <>
                <input
                  ref={inputRef}
                  type="text"
                  className="border-primary/70 border-b focus:border-b"
                  value={automationName}
                  onChange={(e) => setAutomationName(e.target.value)}
                />{" "}
                <Check
                  size={14}
                  onClick={() => {
                    if (automationName == name) setIsActive(!isActive);
                    else
                      mutation.mutate(
                        { name: automationName },
                        {
                          onSuccess: () => {
                            setIsActive(false);
                          },
                        }
                      );
                  }}
                />
              </>
            ) : (
              <>
                <span className="max-w-40 truncate">{name}</span>{" "}
                <Pencil size={14} onClick={() => setIsActive(!isActive)} />
              </>
            )}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AutomationItemBreadcrumb;
