import { GoogleLoginButton } from "@/components/loginButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sign Nin",
  description: "signin page",
};
const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-96 rounded-sm shadow-lg p-8">
        <h1 className="text-4xl font-bol mb-1">Sign In</h1>
        <p className="font-medium text-gray-500 mb-5">Sign In Your Account</p>

        <div className="py-4 text-center">
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
