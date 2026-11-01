"use client";
import { useActionState } from "react";
import { register } from "./action";

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(register, {
    success: false,
    message: "",
  });

  const inputCls = "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-purple-50 px-4">
      <form action={formAction} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md flex flex-col gap-4">
        {/* Header */}
        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold text-gray-900">Buat Akun</h1>
          <p className="text-sm text-gray-500 mt-1">Daftar untuk mulai menggunakan layanan</p>
        </div>

        {/* Pesan feedback */}
        {state.message && <div className={`text-sm text-center px-3 py-2 rounded-lg border ${state.success ? "text-green-700 bg-green-50 border-green-200" : "text-red-700 bg-red-50 border-red-200"}`}>{state.message}</div>}

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Nama
          </label>
          <input id="name" name="name" placeholder="John Doe" defaultValue={state.values?.name ?? ""} className={inputCls} />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input id="email" name="email" type="email" placeholder="john@example.com" defaultValue={state.values?.email ?? ""} className={inputCls} />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Nomor HP <span className="text-gray-400">(opsional)</span>
          </label>
          <input id="phone" name="phone" type="tel" placeholder="08123456789" defaultValue={state.values?.phone ?? ""} className={inputCls} />
        </div>

        {/* Password — sengaja tanpa defaultValue */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input id="password" name="password" type="password" placeholder="Minimal 6 karakter" className={inputCls} />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="mt-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Mendaftar...
            </>
          ) : (
            "Register"
          )}
        </button>

        {/* Link login */}
        <p className="text-sm text-center text-gray-600 mt-2">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Login di sini
          </a>
        </p>
      </form>
    </div>
  );
}
