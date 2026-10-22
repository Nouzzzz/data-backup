
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("shopeaseUser")) || null
  );

  const register = (data) => {
    const users = JSON.parse(localStorage.getItem("shopeaseUsers")) || [];

    const emailExists = users.find(
      (item) => item.email === data.email
    );

    if (emailExists) {
      toast.error("An account with this email already exists.");
      return { success: false };
    }

    const updatedUsers = [...users, data];

    localStorage.setItem("shopeaseUsers", JSON.stringify(updatedUsers));

    toast.success("Account created successfully.");
    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("shopeaseUsers")) || [];

    const foundUser = users.find(
      (item) => item.email === email && item.password === password
    );

    if (!foundUser) {
      toast.error("Invalid email or password.");
      return { success: false };
    }

    setUser(foundUser);
    localStorage.setItem("shopeaseUser", JSON.stringify(foundUser));

    toast.success("Login successful!");
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("shopeaseUser");
    toast.success("Logged out successfully.");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
