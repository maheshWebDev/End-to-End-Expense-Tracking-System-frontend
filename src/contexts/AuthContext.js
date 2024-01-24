import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    const parsedJwtToken = JSON.parse(jwtToken);
    const jwtPayload = decodeJwtToken(parsedJwtToken);

    console.log("Decoded JWT Payload:", jwtPayload);

    if (jwtPayload) {
      setAuthToken(parsedJwtToken);
      setUserId(jwtPayload.userId);
      setIsPremium(jwtPayload.isPremiumUser || false);
    }
  }, []);

  const decodeJwtToken = (token) => {
    try {
      if (token) {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const payload = JSON.parse(atob(base64));
        return payload;
      } else {
        console.error("JWT token is null or undefined");
        return null;
      }
    } catch (error) {
      console.error("Error decoding JWT token:", error);
      return null;
    }
  };

  const login = (token) => {
    const jwtPayload = decodeJwtToken(token);

    if (jwtPayload) {
      // Extract user data from the JWT payload
      const { userId, isPremiumUser } = jwtPayload;

      // Update state with user data
      setAuthToken(token);
      setUserId(userId);
      setIsPremium(isPremiumUser || false);

      // Store token in local storage
      localStorage.setItem("token", JSON.stringify(token));
    }
  };

  const logout = () => {
    // Logic to handle logout, clear user data from state and local storage
    setAuthToken(null);
    setUserId(null);
    setIsPremium(false);

    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ authToken, userId, isPremium, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
