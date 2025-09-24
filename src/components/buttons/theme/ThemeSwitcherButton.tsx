"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const themesArray = ["light", "dark", "colorful"];

export default function ThemeSwitcherButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after client mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent mismatch

  return (
    <div className="flex flex-col gap-3">
      The current theme is: {theme}
      <div className="flex gap-2">
        {themesArray.map((theme) => (
          <button
            key={theme}
            className="px-2 py-1 border rounded"
            onClick={() => setTheme(theme)}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
          </button>
        ))}
      </div>
    </div>
  );
}
