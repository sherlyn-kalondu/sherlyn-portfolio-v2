import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  const toggleTheme = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    document.documentElement.classList.toggle(
      "dark",
      newMode
    );
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="rounded-full p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {darkMode ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}

export default ThemeToggle;