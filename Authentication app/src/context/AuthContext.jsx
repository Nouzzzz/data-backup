import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentuser")) || null
  );

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const registerUser = (data) => {
    const { username, password } = data;

    const userWithUsername = users.find(
      (x) => x.username == username
    );

    if (userWithUsername) {
      alert("User already registered");
      return false;
    }

    const updatedUsers = [...users, data];

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("User registered successfully");
    return true;
  };

  const loginUser = (data) => {
    const { username, password } = data;

    const user = users.find(
      (x) => x.username == username
    );

    if (!user) {
      alert("User not registered");
      return false;
    }

    const verified = user.password == password;

    if (!verified) {
      alert("Invalid credentials");
      return false;
    }

    setCurrentUser(user);
    localStorage.setItem("currentuser", JSON.stringify(user));

    alert("Login successful");
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentuser");
    return true;
  };

  return (
    <AuthContext.Provider value={{currentUser, users,loginUser,registerUser,logout,}}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

