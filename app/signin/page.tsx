import Button from "@/components/button";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-blue-500 w-96 text-center rounded-lg">
        <h1 className="text-2xl mb-4 font-bold text-white">Sign In</h1>
        <p className="text-lg font-bold text-white">Sign In your Account</p>

        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
