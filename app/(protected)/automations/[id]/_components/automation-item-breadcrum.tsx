"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { useUpdateAutomation } from "@/hooks/useUpdateAutomation";
import { Check, Pencil, RotateCcw } from "lucide-react";
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

  const mutationHandler = () => {
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
  };

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
          <BreadcrumbLink className="flex justify-between items-center gap-2">
            {isActive ? (
              <>
                <Input
                  ref={inputRef}
                  type="text"
                  className="border-primary/70 border-b focus:border-b h-8"
                  value={automationName}
                  onChange={(e) => setAutomationName(e.target.value)}
                  onBlur={() => {
                    if (automationName === name) {
                      setIsActive(!isActive);
                      return;
                    }
                  }}
                />{" "}
                <Check size={14} onClick={mutationHandler} />
                <RotateCcw
                  size={14}
                  onClick={() => {
                    setAutomationName(name);
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
