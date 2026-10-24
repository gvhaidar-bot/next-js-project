import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";
const Navbar = () => {
  return (
    <div className="sticky bg-white top-0 w-full  shadow-[0_1px_0_rgba(0,98,65,0.08)] z-20">
      <div className="max-w-[1200px]  mx-auto flex flex-wrap items-center justify-between px-5 h-[72px]">
        <Link href="/">
          <Image src="/logo.jpg" width={100} height={30} alt="logo" priority></Image>
        </Link>
        <NavLink />
      </div>
    </div>
  );
};

export default Navbar;
