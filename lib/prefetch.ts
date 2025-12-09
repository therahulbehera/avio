import { getAllAutomations } from "@/app/actions/automations";
import { onUserInfo } from "@/app/actions/user";
import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function prefetch(
  client: QueryClient,
  action: QueryFunction,
  key: string
) {
  return await client.prefetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 6 * 10 * 1000,
  });
}

export async function PrefetchUserProfile(client: QueryClient) {
  return await prefetch(client, onUserInfo, "user-profile");
}

export async function PrefetchUserAutomations(client: QueryClient) {
  return await prefetch(client, getAllAutomations, "user-automations");
}
