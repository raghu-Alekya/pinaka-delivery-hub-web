function trimSlash(value = "") {
  return String(value).replace(/\/+$/, "");
}

function withLeadingSlash(value, fallback) {
  const path = String(value || fallback).trim();
  return path.startsWith("/") ? path : `/${path}`;
}

export const API_URL = trimSlash(import.meta.env.VITE_API_URL || "");
export const LOGIN_PATH = withLeadingSlash(
  import.meta.env.VITE_LOGIN_PATH,
  "/auth/login"
);
export const REGISTER_PATH = withLeadingSlash(
  import.meta.env.VITE_REGISTER_PATH,
  "/auth/register"
);
