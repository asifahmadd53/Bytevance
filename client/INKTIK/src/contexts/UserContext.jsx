import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userContext = createContext();

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(() => {
    const savedUserInfo = localStorage.getItem("userInfo");
    return savedUserInfo ? JSON.parse(savedUserInfo) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setIsAuthenticated(!!userInfo);
  }, [userInfo]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("https://bytvance-backend.vercel.app/user/profile", {
          withCredentials: true,
        });
        if (response.data) {
          setUserInfo(response.data);
          setIsAuthenticated(true);
        } else {
          setUserInfo(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        setUserInfo(null);
        setIsAuthenticated(false);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <userContext.Provider value={{ userInfo, setUserInfo, isAuthenticated }}>
      {children}
    </userContext.Provider>
  );
}
