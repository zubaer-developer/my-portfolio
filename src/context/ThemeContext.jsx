import { createContext, useContext, useState, useEffect } from "react";

// Context
const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
  // Theme state - localStorage  theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme || "light";
  });

  // Theme  localStorage  save
  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Theme toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Custom Hook - for easy theme use
export const useTheme = () => {
  return useContext(ThemeContext);
};
