import { createContext, useEffect } from "react";
const AuthContext = createContext();
export default AuthContext;
import axios from "axios";
import jwtDecode from "jwt-decode";

export function AuthWrapper({ children }) {
  const isLoggedIn = () => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("access") !== null) {
        const info = jwtDecode(localStorage.getItem("access"));
        if (Date.now() / 1000 < info.exp) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  };

  useEffect(() => {
    let four_minutes = 4 * 60 * 1000;
    const interval = setInterval(() => {
      console.log("somting");
      refreshToken();
    }, four_minutes);

    interval;
  }, []);

  const refreshToken = async () => {
    if (localStorage.getItem("refresh") !== null) {
      const refresh = localStorage.getItem("refresh");
      await axios
        .post(
          "http://18.117.194.28/api/token/refresh/",
          JSON.stringify({ refresh: refresh }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.removeItem("access");
          localStorage.setItem("access", res.data.access);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
