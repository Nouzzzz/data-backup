
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`mt-auto p-4 text-center text-2xl   ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
      <p>ShopEase</p>
    </footer>
  );
}

export default Footer;