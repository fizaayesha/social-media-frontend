import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    // JSON.parse(localStorage.getItem("user")) || null
    JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user || "{}")
      ?.currentUser?.accessToken
  );

  const login = async (inputs) => {
    //TO DO
    // setCurrentUser({
    //   id: 1,
    //   name: "John Doe",
    //   profilePic:
    //     "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // });
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs,
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
