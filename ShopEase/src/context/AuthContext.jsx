
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentuser")) || null
  );

  const loginUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return false;
    }

    setCurrentUser(user);
    localStorage.setItem("currentuser", JSON.stringify(user));

    return true;
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentuser");
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
