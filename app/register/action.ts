"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

type State = {
  success: boolean;
  message: string;
  values?: {
    name: string;
    email: string;
    phone: string;
  };
};

export async function register(prevState: State, formData: FormData): Promise<State> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const phone = (formData.get("phone") as string) || "";

  // ✅ Helper untuk bawa nilai balik
  const values = { name, email, phone };

  if (!name || !email || !password) {
    return {
      success: false,
      message: "Nama, email, password wajib diisi",
      values, // ✅ kirim balik
    };
  }

  if (password.length < 6) {
    return {
      success: false,
      message: "Password minimal 6 karakter",
      values,
    };
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return {
        success: false,
        message: "Email sudah terdaftar",
        values,
      };
    }

    const hashed = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: { name, email, password: hashed, phone: phone || null },
    });

    return { success: true, message: "Register berhasil" };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Register gagal, coba lagi",
      values,
    };
  }
}
