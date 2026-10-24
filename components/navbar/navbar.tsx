import Link from "next/link";
import NavLink from "./navlink";
const Navbar = () => {
  return (
    <div className="sticky bg-white top-0 w-full  shadow-[0_1px_0_rgba(0,98,65,0.08)] z-20">
      <div className="max-w-[1200px]  mx-auto flex flex-wrap items-center justify-between px-5 h-[72px]">
        <Link href="/#beranda" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-white">R</span>
          <span className="text-lg font-bold text-primary-dark">[Nama Restoran]</span>
        </Link>
        <NavLink />
        <Link href="/#kontak" className="hidden rounded-full bg-primary-accent px-7 py-3 text-base font-semibold text-white transition hover:bg-primary md:inline-flex md:min-h-[44px] md:items-center">
          Reservasi
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
