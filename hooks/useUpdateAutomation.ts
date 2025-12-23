import { updateAutomation } from "@/lib/fetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useUpdateAutomation(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: { name?: string; active?: boolean }) =>
      updateAutomation(id, payload),
    onMutate: () => toast.info("Updating the automation name."),

    onSuccess: (data) => {
      toast.success("Successfully updated the automation name.");
      // queryClient.invalidateQueries({ queryKey: ["user-automations", id] });
      queryClient.invalidateQueries({ queryKey: ["user-automations"] });

      const { automation } = data;
      queryClient.setQueryData(["user-automations", automation.id], automation);
    },
  });
}
