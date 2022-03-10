import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
const AuthContext = createContext();
export default AuthContext;

export function AuthWrapper({ children }) {
  const Router = useRouter();

  const isLoggedIn = () => {
    const d = new Date();
    if (
      localStorage.getItem("expiry") === null ||
      d.getTime() > Date.parse(localStorage.getItem("expiry"))
    ) {
      Router.push("/login");
    } else {
      return true;
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
