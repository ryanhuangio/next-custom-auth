import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import Image from "next/image";
import SignOutButton from "../components/signOutButton";

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions as object);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 pb-4 pt-6">
      <h1 className="text-2xl font-bold">Welcome {session?.user?.name}!</h1>
      <p></p>

      <p>Your email is {session?.user?.email}</p>
      {session?.user?.image && (
        <Image
          src={session?.user?.image as string}
          alt={session?.user?.name as string}
          width={100}
          height={100}
          className="rounded shadow-lg border mt-3"
        ></Image>
      )}
      <h2 className="mt-4 font-medium mb-8">You are logged in.</h2>
      <SignOutButton />
    </div>
  );
};

export default ServerProtectedPage;
