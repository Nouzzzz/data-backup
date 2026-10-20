import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("shopeaseUser")) || null
  );

  const register = (data) => {
    const users = JSON.parse(localStorage.getItem("shopeaseUsers")) || [];
    const emailExists = users.find((item) => item.email === data.email);

    if (emailExists) {
      return { success: false, message: "An account with this email already exists." };
    }

    // Demo-only local authentication. Do not use this for real passwords.
    const updatedUsers = [...users, data];
    localStorage.setItem("shopeaseUsers", JSON.stringify(updatedUsers));
    return { success: true, message: "Account created successfully." };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("shopeaseUsers")) || [];
    const foundUser = users.find(
      (item) => item.email === email && item.password === password
    );

    if (!foundUser) {
      return { success: false, message: "Email or password is incorrect." };
    }

    const activeUser = { name: foundUser.name, email: foundUser.email };
    localStorage.setItem("shopeaseUser", JSON.stringify(activeUser));
    setUser(activeUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("shopeaseUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
