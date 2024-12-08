import { createContext, useContext, useEffect, useMemo } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

import { userCredentialsServiceFactory } from "../services/userCredentialsService";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [authentication, setAuthentication] = useLocalStorage(
    "authentication",
    {}
  );

  const userCredentialsService = userCredentialsServiceFactory(
    authentication["token"]
  );

  const resetTimer = () => {
    if (authentication) {
      clearTimeout(logoutTimer);

      logoutTimer = setTimeout(async () => {
        setAuthentication({});

        localStorage.removeItem("authentication");
        await userCredentialsService.logout();
        // 600000
      }, 60000000);
    }
  };

  let logoutTimer;

  useEffect(() => {
    const handleActivity = () => {
      resetTimer();
    };

    if (authentication) {
      window.addEventListener("mousemove", handleActivity);
      window.addEventListener("keydown", handleActivity);
      window.addEventListener("scroll", handleActivity);

      resetTimer();
    }

    return () => {
      window.addEventListener("mousemove", handleActivity);
      window.addEventListener("keydown", handleActivity);
      window.addEventListener("scroll", handleActivity);

      clearTimeout(logoutTimer);
    };
  }, [authentication.token]);

  const updateAuthentication = (data) => {
    const token = data["token"];

    setAuthentication(data);
  };

  const clearToken = () => {
    localStorage.removeItem("authentication");

    setAuthentication({});
  };

  const token = authentication["token"];

  const userId = authentication["user_id"];

  const isAuthenticated = !!authentication["token"];

  const context = useMemo(
    () => ({
      updateAuthentication,
      clearToken,
      token,
      userId,
      isAuthenticated,
    }),
    [updateAuthentication, token, isAuthenticated]
  );

  return (
    <AuthenticationContext.Provider value={context}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext = () => {
  const context = useContext(AuthenticationContext);

  return context;
};
