import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-circle btn-ghost text-xl"
      title={theme === "light" ? "Dark Mode" : "Light Mode"}
    >
      {theme === "light" ? (
        <FaMoon className="text-gray-700 hover:text-primary" />
      ) : (
        <FaSun className="text-yellow-400 hover:text-yellow-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
