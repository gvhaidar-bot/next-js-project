import { signIn } from "@/auth";
import { GrGoogle } from "react-icons/gr";

export const GoogleLoginButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button className="bg-blue-600 px-6 w-full py-3 rounded-full flex items-center justify-center text-white font-bold hover:bg-blue-950 hover:scale-105 transition-all  cursor-pointer gap-2">
        <GrGoogle className="size-7" />
        Sign In with google
      </button>
    </form>
  );
};
