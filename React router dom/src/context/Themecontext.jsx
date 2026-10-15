import { createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setDark] = useState("light"); 

 const changeTheme = () => {
     setDark(theme === "light" ? "dark" : "light");
  }

  return (

    <ThemeContext.Provider value={{ theme, setDark, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};