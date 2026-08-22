import { API_URL } from "../config/env";

const TOKEN_KEY = "pinaka_token";
const USER_KEY = "pinaka_user";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveSession({ token, user }) {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export async function apiRequest(path, { method = "GET", body, auth = false } = {}) {
  if (!API_URL) {
    throw new Error("VITE_API_URL is missing. Add it to your .env file.");
  }

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const token = getToken();
  if (auth && token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message || data.error || `Request failed (${response.status})`
    );
  }

  return data;
}
