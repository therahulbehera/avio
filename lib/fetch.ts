import axios from "axios";

export async function refreshToken(token: string) {
  const refresh_token =
    await axios.get(`${process.env.INSTAGRAM_BASE_URL}/m/refresh_access_token
  ?grant_type=ig_refresh_token
  &access_token=${token}`);

  return refresh_token.data;
}

export async function updateAutomation(
  id: string,
  payload: { name?: string; active?: boolean }
) {
  const res = await fetch(`/api/automations/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Automation update failed.");

  return res.json();
}
