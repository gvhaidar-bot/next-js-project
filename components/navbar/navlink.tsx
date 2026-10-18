"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const NavLink = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)} className="inline-flex items-center p-2 justify-center text-sm text-gray-600 rounded-md md:hidden  hover:bg-gray-100">
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>

      <div
        className={clsx("w-full  md:block  md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col font-semibold  text-sm uppercase p-4 mt-4 rounded-sm bg-gray-50  md:flex-row md:items-center md:space-x-10  md:p-0  md:mt-0 md:border-0  md:bg-white">
          <li className="">
            <Link href="/" className="block py-2  px-3 text-gray-800 hover:bg-gray-100 rounded-sm  md:hover:bg-transparent  md:p-0">
              home
            </Link>
          </li>

          <li className="">
            <Link href="/about" className="block py-2  px-3 text-gray-800 hover:bg-gray-100 rounded-sm  md:hover:bg-transparent  md:p-0">
              about
            </Link>
          </li>

          <li className="">
            <Link href="/rooms" className="block py-2  px-3 text-gray-800 hover:bg-gray-100 rounded-sm  md:hover:bg-transparent  md:p-0">
              Rooms
            </Link>
          </li>

          <li className="">
            <Link href="/contact" className="block py-2  px-3 text-gray-800 hover:bg-gray-100 rounded-sm  md:hover:bg-transparent  md:p-0">
              contact
            </Link>
          </li>

          <li className="">
            <Link href="/myreservation" className="block py-2  px-3 text-gray-800 hover:bg-gray-100 rounded-sm  md:hover:bg-transparent  md:p-0">
              my reservation
            </Link>
          </li>

          <li className="">
            <Link href="/admin/dashboard" className="block py-2  px-3 text-gray-800 hover:bg-gray-100 rounded-sm  md:hover:bg-transparent  md:p-0">
              dasboard
            </Link>
          </li>

          <li className="">
            <Link href="/admin/room" className="block py-2  px-3 text-gray-800 hover:bg-gray-100 rounded-sm  md:hover:bg-transparent  md:p-0">
              manage room
            </Link>
          </li>

          <li className="pt-2 md:pt-0">
            <Link href="/signin" className="py-2.5 px-6 bg-orange-400  text-white hover:bg-orange-600 rounded-sm">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLink;
