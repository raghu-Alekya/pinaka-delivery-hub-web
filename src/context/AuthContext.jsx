import { createContext, useContext, useMemo, useState } from "react";
import { getStoredUser } from "../api/client";
import { logout as logoutRequest } from "../api/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getStoredUser());

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: Boolean(user),
      setUser,
      logout() {
        logoutRequest();
        setUser(null);
      },
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
