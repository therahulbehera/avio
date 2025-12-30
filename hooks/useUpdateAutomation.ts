import { updateAutomation } from "@/lib/fetch";
import { Automation } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useUpdateAutomation(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: { name?: string; active?: boolean }) =>
      updateAutomation(id, payload),
    onMutate: () => toast.info("Updating the automation."),

    onSuccess: (data) => {
      toast.success("Successfully updated the automation.");

      const { automation } = data;
      queryClient.setQueryData(["user-automation", automation.id], automation);

      queryClient.setQueryData(["user-automations"], (old: Automation[]) =>
        old?.map((a) => (a.id === id ? { ...a, ...automation } : a))
      );
    },
  });
}
