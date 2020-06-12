import React, { createContext, useCallback, useState, useContext } from "react";

import api from "../services/api";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@naradeva:token");
    const user = JSON.parse(localStorage.getItem("@naradeva:user"));
    if (token && user) {
      return { token, user };
    }
    return {};
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/autentication", {
      email,
      password,
    });
    const { token, user } = response.data;
    localStorage.setItem("@naradeva:token", token);
    localStorage.setItem("@naradeva:user", JSON.stringify(user));
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@naradeva:token");
    localStorage.removeItem("@naradeva:user");
    setData({});
  }, []);
  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Use auth must be used within context");
  }
  return context;
}
