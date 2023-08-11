"use client";

import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "./components/nav";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <body
          className={`${montserrat.className} text-black bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-300`}
        >
          <NavBar />
          <main className="py-0 px-0">{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
