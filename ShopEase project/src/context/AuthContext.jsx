
import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("shopeaseUser")) || null
  );

  const register = (data) => {
    const users =
      JSON.parse(localStorage.getItem("shopeaseUsers")) || [];

    const emailExists = users.find(
      (item) => item.email === data.email
    );

    if (emailExists) {
      return {
        success: false,
        message: "An account with this email already exists."
      };
    }

    users.push(data);

    localStorage.setItem("shopeaseUsers", JSON.stringify(users));

    return { success: true };
  };

  const login = (email, password) => {
    const users =
      JSON.parse(localStorage.getItem("shopeaseUsers")) || [];

    const foundUser = users.find(
      (item) => item.email === email && item.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password."
      };
    }

    setUser(foundUser);
    localStorage.setItem("shopeaseUser", JSON.stringify(foundUser));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("shopeaseUser");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }} >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;