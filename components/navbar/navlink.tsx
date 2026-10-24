"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const NavLink = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)} className="hover:bg-primary-soft rounded-full p-2 text-sm items-center transition-colors justify-center inline-flex text-primary md:hidden">
        {!open ? <IoMenu className="size-10" /> : <IoClose className="size-10" />}
      </button>

      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col rounded-[12px] bg-white p-2 text-base shadow-[0_8px_32px_rgba(0,98,65,0.14)] mt-2 space-y-1 md:flex-row md:items-center md:justify-between md:gap-1 md:p-0 md:bg-transparent md:shadow-none md:mt-0 md:space-y-0">
          <li>
            <Link className="block min-h-[44px] items-center rounded-full py-2 px-4 font-medium text-ink transition hover:text-primary hover:bg-primary-soft md:flex" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="block min-h-[44px] items-center rounded-full py-2 px-4 font-medium text-ink transition hover:text-primary hover:bg-primary-soft md:flex" href="/about">
              about
            </Link>
          </li>
          <li>
            <Link className="block min-h-[44px] items-center rounded-full py-2 px-4 font-medium text-ink transition hover:text-primary hover:bg-primary-soft md:flex" href="/rooms">
              {" "}
              Rooms
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block min-h-[44px] items-center rounded-full py-2 px-4 font-medium text-ink transition hover:text-primary hover:bg-primary-soft md:flex">
              {" "}
              contact
            </Link>
          </li>
          <li>
            <Link className="block min-h-[44px] items-center rounded-full py-2 px-4 font-medium text-ink transition hover:text-primary hover:bg-primary-soft md:flex" href="/">
              {" "}
              my reservation
            </Link>
          </li>

          <li>
            <Link className="block min-h-[44px] items-center rounded-full py-2 px-4 font-medium text-ink transition hover:text-primary hover:bg-primary-soft md:flex" href="/admin/dashboard">
              dashboard
            </Link>
          </li>

          <li>
            <Link className="block min-h-[44px] items-center rounded-full py-2 px-4 font-medium text-ink transition hover:text-primary hover:bg-primary-soft md:flex" href="/admin/manage">
              manage room
            </Link>
          </li>

          <li>
            <Link className="bg-primary-accent ml-0 mt-2 py-2.5 px-5 text-white flex min-h-[44px] items-center justify-center rounded-full text-center font-semibold hover:bg-primary transition md:ml-4 md:mt-0" href="/signin">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLink;
