import { getAllAutomations } from "@/app/actions/automations";
import { useQuery } from "@tanstack/react-query";

export function useQueryAutomations() {
  return useQuery({
    queryKey: ["user-automations"],
    queryFn: getAllAutomations,
    staleTime: 15 * 60 * 1000,
  });
}
