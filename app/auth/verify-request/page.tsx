import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Email",
};

export default function Faq() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 pb-4 pt-6">
      <h1 className="text-2xl font-semibold mb-7">Email link sent</h1>
      <p className="mb-5">
        Please click on the magic link in your inbox to automatically sign in.
      </p>
      <p>
        <strong>
          (Please click your spam folder if you do not see the email.)
        </strong>
      </p>
    </div>
  );
}
