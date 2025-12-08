import axios from "axios";

export async function refreshToken(token: string) {
  const refresh_token =
    await axios.get(`${process.env.INSTAGRAM_BASE_URL}/m/refresh_access_token
  ?grant_type=ig_refresh_token
  &access_token=${token}`);

  return refresh_token.data;
}
