import { signIn } from "@/auth";
import { BsGoogle } from "react-icons/bs";

const Button = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button className="flex justify-center items-center mx-auto mt-4 px-6 bg-white py-4 rounded-lg mb-10 gap-6">
          <BsGoogle className="size-8 text-blue-900" />
          <span className="font-bold text-blue-500">Sign In With Google</span>
        </button>
      </form>
    </div>
  );
};

export default Button;
