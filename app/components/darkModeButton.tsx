"use client";

import React from "react";
import { useTheme } from "next-themes";
import { PiSunHorizonDuotone, PiMoonStarsDuotone } from "react-icons/pi";

const DarkModeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <button
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
        className="mr-5"
      >
        {theme === "dark" ? (
          <PiSunHorizonDuotone className=" w-7 h-7 dark:text-indigo-300 text-indigo-900" />
        ) : (
          <PiMoonStarsDuotone className=" w-7 h-7 dark:text-indigo-300 text-indigo-900" />
        )}
      </button>
    </>
  );
};

export default DarkModeButton;
