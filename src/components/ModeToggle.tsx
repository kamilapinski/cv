"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const dynamic = "force-static"; // wymusza statyczną generację

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // This ensures the component is only rendered on the client
  React.useEffect(() => {    
    setMounted(true);

  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        // Show light mode button when dark mode is active
        <button
          id="light-mode-button"
          onClick={() => setTheme("light")}
          className="rounded bg-yellow-200 hover:bg-yellow-300 cursor-pointer option-icon"
        >
          <Sun className="h-5 w-5 text-yellow-600" />
        </button>
      ) : (
        // Show dark mode button when light mode is active
        <button
          id="dark-mode-button"
          onClick={() => setTheme("dark")}
          className="rounded bg-gray-800 hover:bg-gray-700 cursor-pointer option-icon"
        >
          <Moon className="h-5 w-5 text-white" />
        </button>
      )}
    </div>
  );
}
