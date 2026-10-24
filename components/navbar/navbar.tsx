import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";
const Navbar = () => {
  return (
    <div className="sticky bg-white top-0 w-full  shadow-[0_1px_0_rgba(0,98,65,0.08)] z-20">
      <div className="max-w-[1200px]  mx-auto flex flex-wrap items-center justify-between gap-x-4 px-5 min-h-[72px] py-2">
        <Link href="/" className="flex shrink-0 items-center">
          <Image src="/logo.jpg" width={40} height={40} alt="logo" priority className="h-10 w-10 object-contain"></Image>
        </Link>
        <NavLink />
      </div>
    </div>
  );
};

export default Navbar;
