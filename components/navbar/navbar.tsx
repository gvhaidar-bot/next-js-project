import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";
const Navbar = () => {
  return (
    <div className="fixed bg-white top-0 w-full  shadow-sm z-20">
      <div className="max-w-7xl  mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <Image src="/logo.jpg" width={100} height={30} alt="logo" priority></Image>
        </Link>
        <NavLink />
      </div>
    </div>
  );
};

export default Navbar;
