"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const links = [
  { label: "Beranda", href: "/#beranda" },
  { label: "Menu", href: "/#menu" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Testimoni", href: "/#testimoni" },
  { label: "Kontak", href: "/#kontak" },
];

const NavLink = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)} aria-label="Buka atau tutup menu" className="hover:bg-primary-soft rounded-full p-2 text-sm items-center transition-colors justify-center inline-flex text-primary md:hidden">
        {!open ? <IoMenu className="size-10" /> : <IoClose className="size-10" />}
      </button>

      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col p-4 bg-cream text-base mt-4 space-y-3 md:flex-row md:items-center md:gap-1 md:p-0 md:bg-white md:mt-0 md:space-y-0">
          {links.map((link) => (
            <li key={link.label}>
              <Link onClick={() => setOpen(false)} className="block min-h-[44px] items-center rounded-full py-2 px-3 text-ink transition hover:text-primary hover:bg-primary-soft md:flex" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="md:hidden">
            <Link onClick={() => setOpen(false)} className="block min-h-[44px] rounded-full bg-primary-accent px-5 py-2 text-center font-semibold text-white transition hover:bg-primary" href="/#kontak">
              Reservasi
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLink;
