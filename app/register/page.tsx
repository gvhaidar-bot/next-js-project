import { register } from "./action";

const RegisterPage = () => {
  return (
    <div className="h-screen pt-20 flex justify-center items-center bg-gray-100">
      <form action={register} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">Register</h1>

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input name="name" id="name" type="text" placeholder="Enter your name" className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input name="email" id="email" type="email" placeholder="Enter your email" className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input name="password" id="password" type="password" placeholder="Enter your password" className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Tombol */}
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors mt-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
