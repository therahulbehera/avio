"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Activity } from "lucide-react";
import React from "react";
import { Button } from "./button";
import { toast } from "sonner";

const AutomationButton = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => axios.post("/api/automations"),
    onMutate: () => {
      toast.info("Initiating new Automation...");
    },
    onError: (error) => {
      toast.error("Failed to create a new automation.");
      console.log("Encounter an error while creating an automation: ", error);
    },
    onSuccess: (response) => {
      const data = response.data;
      console.log("after mutate data ", data);

      try {
        if (data.status === 200) {
          toast.success("Automation has been created");

          queryClient.invalidateQueries({
            queryKey: ["user-automations"],
          });
        }
      } catch (error) {
        console.log("Couldn't create an automation. ", error);
      }
    },
  });
  return (
    <Button className="p-1 size-7 rounded-full" onClick={() => mutate()}>
      <Activity />
    </Button>
  );
};

export default AutomationButton;
