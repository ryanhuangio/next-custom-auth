"use client";

import { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import { Provider } from "next-auth/providers/index";
import { useSearchParams } from "next/navigation";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { PiEnvelopeDuotone } from "react-icons/pi";

const defaultCallbackUrl = "/dashboard";

export default function SignIn() {
  const [providers, setProviders] = useState<
    Record<string, Provider> | undefined
  >(undefined);

  useEffect(() => {
    async function fetchProviders() {
      const fetchedProviders = await getProviders();
      if (!fetchedProviders) {
        setProviders(undefined);
      }
      setProviders(fetchedProviders as any);
    }
    fetchProviders();
  }, []);

  const searchParams = useSearchParams() as any;
  let redirect = searchParams.get("redirect");
  if (redirect === "") redirect = "/dashboard";
  console.log(providers);

  const [email, setEmail] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleEmailSignIn = () => {
    const callbackUrl = "/dashboard";
    signIn("email", { email, callbackUrl });
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 pb-0 pt-6 text-center">
      <h1 className="text-2xl font-semibold mb-7">Sign In</h1>
      <div className=" max-w-sm mx-auto">
        <button
          className="text-base px-6 mb-3 text-white py-3 transition-all rounded-full border-none shadow hover:shadow-lg hover:bg-red-500 bg-red-600 dark:bg-red-500 dark:hover:bg-red-400 mr-2 inline-block text-center justify-between w-full"
          onClick={() => {
            const callbackUrl = redirect ? redirect : defaultCallbackUrl;
            signIn("google", { callbackUrl });
          }}
        >
          <AiOutlineGoogle className="inline-block mr-3 w-6 h-6 relative -top-0.5" />
          <span className="inline-block">Sign in with Google</span>
        </button>
        <br />
        <button
          className="text-base px-6 mb-3 text-white py-3 transition-all rounded-full border-none shadow hover:shadow-lg hover:bg-sky-500 bg-sky-600 dark:bg-sky-500 dark:hover:bg-sky-400 mr-2 inline-block text-center  w-full"
          onClick={() => {
            const callbackUrl = redirect ? redirect : defaultCallbackUrl;
            signIn("facebook", { callbackUrl });
          }}
        >
          <BiLogoFacebook className="inline-block mr-3 w-6 h-6 relative -top-0.5" />
          <span className="inline-block">Sign in with Facebook</span>
        </button>
        <br />
        <button
          className="text-base px-6 mb-3 text-white py-3 transition-all rounded-full border-none shadow hover:shadow-lg hover:bg-slate-600 bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-400 mr-2 inline-block text-center  w-full"
          onClick={() => {
            const callbackUrl = redirect ? redirect : defaultCallbackUrl;
            signIn("github", { callbackUrl });
          }}
        >
          <AiFillGithub className="inline-block mr-3 w-6 h-6 relative -top-0.5 text-slate-100" />
          <span className="inline-block text-slate-100">
            Sign in with Github
          </span>
        </button>
        <br /> <br />
        <input
          placeholder="Email address"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-8"
        />
        <br />
        <button
          className="text-base px-6 mb-3 text-white py-3 transition-all rounded-full border-none shadow hover:shadow-lg hover:bg-green-400 bg-green-500 dark:bg-green-500 dark:hover:bg-green-400 mr-2 inline-block text-center  w-full"
          onClick={handleEmailSignIn}
        >
          Sign in with Email
        </button>
        <br />
      </div>
    </div>
  );
}
