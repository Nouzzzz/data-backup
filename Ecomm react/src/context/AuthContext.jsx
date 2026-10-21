import { createContext, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentuser")) || null
  );

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const registerUser = (data) => {
    const { username, email, password } = data;

    const userWithUsername = users.find(
      (x) => x.username == username
    );

      const userWithemail = users.find(
      (x) => x.email == email
    );


    if (userWithUsername) {
      toast.error("User already registered");
      return false;
    }

    if (userWithemail) {
      toast.error("Email already registered");
      return false;
    }

    const updatedUsers = [...users, data];

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success("User registered successfully");
    return true;
  };

  const loginUser = (data) => {
    const { username, email,  password } = data;

    const user = users.find(
      (x) => x.username == username
    );

       if (!user) {
      toast.error("User not registered");
      return false;
    }

       const checkemail = users.find(
      (x) => x.email == email
    );

    if (!checkemail) {
      toast.error("Email not registered");
      return false;
    }

    const verified = user.password == password;

    if (!verified) {
      toast.error("Invalid credentials");
      return false;
    }

    setCurrentUser(user);
    localStorage.setItem("currentuser", JSON.stringify(user));

    toast.success("Login successful");
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

