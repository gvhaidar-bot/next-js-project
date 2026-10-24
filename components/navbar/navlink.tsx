"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const NavLink = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)} className="hover:bg-primary-soft rounded-full  p-2 text-sm items-center transition-colors justify-center inline-flex text-primary md:hidden">
        {!open ? <IoMenu className="size-10" /> : <IoClose className="w-10" />}
      </button>

      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col p-4 bg-cream text-sm uppercase mt-4 space-y-3 md:flex-row md:justify-between space-x-2 md:p-0 md:text-base md:bg-white md:mt-0">
          <li>
            <Link className="block hover:text-primary hover:bg-primary-soft  rounded-full py-2 px-3" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="block hover:text-primary hover:bg-primary-soft rounded-full py-2 px-3 " href="/about">
              about
            </Link>
          </li>
          <li>
            <Link className="block hover:text-primary hover:bg-primary-soft rounded-full py-2 px-3 " href="/rooms">
              {" "}
              Rooms
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block hover:text-primary hover:bg-primary-soft rounded-full py-2 px-3  ">
              {" "}
              contact
            </Link>
          </li>
          <li>
            <Link className="block hover:text-primary hover:bg-primary-soft rounded-full py-2 px-3  " href="/">
              {" "}
              my reservation
            </Link>
          </li>

          <li>
            <Link className="block hover:text-primary hover:bg-primary-soft rounded-full py-2 px-3  " href="/admin/dashboard">
              dashboard
            </Link>
          </li>

          <li>
            <Link className="block hover:text-primary hover:bg-primary-soft rounded-full py-2 px-3  " href="/admin/manage">
              manage room
            </Link>
          </li>

          <li>
            <Link className="bg-primary-accent ml-5 py-2 px-5 text-white block  rounded-full  text-center  hover:bg-primary text-[18px] md:text-base" href="/signin">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLink;
