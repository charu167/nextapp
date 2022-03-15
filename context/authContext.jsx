import { createContext } from "react";
const AuthContext = createContext();
export default AuthContext;

export function AuthWrapper({ children }) {
  const isLoggedIn = () => {
    // const d = new Date();
    // if (
    //   localStorage.getItem("expiry") === null ||
    //   d.getTime() > Date.parse(localStorage.getItem("expiry"))
    // ) {
    //   return false;
    // } else {
    //   return true;
    // }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
