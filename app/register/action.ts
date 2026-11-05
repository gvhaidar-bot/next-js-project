"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "../generated/prisma/client";
import bcrypt from "bcryptjs";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rate-limit";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(100, "Nama maksimal 100 karakter"),
  email: z.string().trim().toLowerCase().min(1, "Email wajib diisi").email("Format email tidak valid").max(255, "Email terlalu panjang"),
  password: z
    .string()
    .min(1, "Password wajib diisi")
    .min(6, "Password minimal 6 karakter")
    .max(72, "Password maksimal 72 karakter")
    .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, "Password harus mengandung huruf dan angka"),
  phone: z.string().trim().max(20, "Nomor HP maksimal 20 karakter"),
});

type FieldErrors = {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
};

type State = {
  success: boolean;
  message: string;
  errors?: FieldErrors;
  values?: {
    name: string;
    email: string;
    phone: string;
  };
};

export async function register(prevState: State, formData: FormData): Promise<State> {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  const limit = rateLimit(`register:${ip}`, 5, 10 * 60 * 1000);
  if (!limit.allowed) {
    return { success: false, message: "Terlalu banyak percobaan, coba lagi 10 menit lagi" };
  }

  const raw = {
    name: (formData.get("name") as string) ?? "",
    email: (formData.get("email") as string) ?? "",
    password: (formData.get("password") as string) ?? "",
    phone: (formData.get("phone") as string) ?? "",
  };

  const result = registerSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Periksa kembali isianmu",
      errors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
        phone: fieldErrors.phone?.[0],
      },
      values: raw,
    };
  }

  const { name, email, password, phone } = result.data;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return {
        success: false,
        message: "Email sudah terdaftar",
        errors: { email: "Email sudah terdaftar" },
        values: { name, email, phone },
      };
    }

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: { name, email, password: hashed, phone: phone || null },
    });

    return { success: true, message: "Register berhasil" };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return {
        success: false,
        message: "Email sudah terdaftar",
        errors: { email: "Email sudah terdaftar" },
        values: { name, email, phone },
      };
    }
    console.error(error);
    return { success: false, message: "Register gagal, coba lagi", values: { name, email, phone } };
  }
}
