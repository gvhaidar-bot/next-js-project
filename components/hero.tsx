import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image src="/hero.jpg" fill className="w-full h-full object-cover object-center" alt="hero" />
        <div className="absolute bg-black inset-0 opacity-0"></div>
      </div>

      <div className="h-full text-center relative flex items-center justify-center flex-col  ">
        <h1 className="text-7xl leading-tight font-bold tracking-wider mb-4">Hotel Kami</h1>
        <p className="text-gray-200 font-semibold italic leading-tight tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        <div className="flex items-center gap-7 mt-4">
          <Link href="/room" className="block bg-blue-400 rounded-full py-3 px-8 text-center font-bold hover:bg-blue-900 cursor-pointer hover:scale-105 transition-all">
            Book Now
          </Link>
          <Link href="/Contact" className="border px-6 py-3 rounded-full border-blue-500 font-bold hover:bg-blue-950  hover:scale-105 hover:border-none transition-all">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
