"use client";

import SignOutButton from "../components/signOutButton";
import {
  Flowbite,
  CustomFlowbiteTheme,
  Button,
  Navbar,
  Dropdown,
} from "flowbite-react";
import DarkModeButton from "./darkModeButton";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { PiKeyholeDuotone } from "react-icons/pi";
import Image from "next/image";

const navTheme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: " px-0 py-2.5 max-w-5xl",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between px-4",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full lg:block lg:w-auto ",
      list: "border-t border-indigo-200 dark:border-indigo-800 lg:border-none mt-4 flex flex-col md:mt-0 lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pr-4 pl-3 lg:p-0",
      active: {
        on: "text-red-500 lg:border-none",
        off: "text-indigo-950 hover:bg-indigo-100 dark:border-indigo-800 dark:text-indigo-400 dark:hover:bg-indigo-700 dark:hover:text-indigo-400 lg:border-0 lg:hover:bg-transparent lg:hover:text-indigo-700 lg:dark:hover:bg-transparent lg:dark:hover:text-indigo-400",
      },
      disabled: {
        on: "text-indigo-400 hover:cursor-not-allowed dark:text-indigo-600",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg py-2 text-sm text-red-500 lg:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  },
};

export default function NavBar() {
  const pathname = usePathname();

  console.log(pathname);

  const isHomeActive = (path: any) => {
    return pathname === "/" ? true : false;
  };
  const isActive = (path: any) => {
    return pathname?.includes(path) ? true : false;
  };

  const { theme } = useTheme();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flowbite
      theme={{ theme: navTheme, dark: theme === "dark" }}
      className="p-0 m-0"
    >
      <div
        className={`z-50 w-full bg-indigo-100 dark:bg-indigo-950 lg:dark:bg-indigo-950 sticky top-0  border-indigo-300 dark:border-indigo-700 ${
          scrolled ? "" : "lg:border-none"
        }`}
      >
        <Navbar className="container mx-auto px-0">
          <Navbar.Brand>
            <Link href="/" className="flex">
              <PiKeyholeDuotone className="mr-3 w-8 h-8" />
              <div className="inline-block self-center whitespace-nowrap text-xl font-semibold text-indigo-950 dark:text-indigo-300">
                Next Custom Auth
              </div>
            </Link>
          </Navbar.Brand>
          <div className="flex lg:order-2 ">
            <DarkModeButton />
            <SignOutButton />
          </div>
        </Navbar>
      </div>
    </Flowbite>
  );
}
