"use client";
import { SessionProvider, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthButtons() {
  return (
    <SessionProvider>
      <AuthCheck />
    </SessionProvider>
  );
}

const AuthCheck = () => {
  const { data: session } = useSession();

  if (session) {
    return <SignOutButton />;
  } else {
    return <SignInButton />;
  }
};

const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="text-base px-6 py-3 transition-all rounded-full border-none shadow hover:shadow-lg text-white hover:bg-red-400 bg-red-500 dark:bg-red-500 dark:hover:bg-red-400"
    >
      Sign Out
    </button>
  );
};

const SignInButton = () => {
  return (
    <Link href="/dashboard">
      <button className="text-base px-6 py-3 transition-all rounded-full border-none shadow hover:shadow-lg text-white hover:bg-emerald-400 bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
        Sign In
      </button>
    </Link>
  );
};
