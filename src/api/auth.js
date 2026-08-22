import { LOGIN_PATH, REGISTER_PATH } from "../config/env";
import { apiRequest, clearSession, saveSession } from "./client";

function normalizeAuthResponse(data) {
  const token = data.token || data.accessToken || data.access_token;
  const user = data.user || data.data || {
    name: data.name,
    email: data.email,
  };

  return { token, user, raw: data };
}

export async function login(email, password) {
  const data = await apiRequest(LOGIN_PATH, {
    method: "POST",
    body: { email, password },
  });
  const session = normalizeAuthResponse(data);
  saveSession(session);
  return session;
}

export async function register(name, email, password) {
  const data = await apiRequest(REGISTER_PATH, {
    method: "POST",
    body: { name, email, password },
  });
  const session = normalizeAuthResponse(data);
  saveSession(session);
  return session;
}

export function logout() {
  clearSession();
}
