import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/hero.jpg" alt="hero" fill className="object-cover w-full h-full object-center" />
        <div className="absolute inset-0 bg-black opacity-0"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center h-full text-center =">
        <h1 className="text-7xl mb-3 leading-tight font-extrabold capitalize">Pesan Kamar Mewah</h1>
        <p className="text-xl text-gray-300 mb-3">Dapatkan Promo Gratis Hanya hari ini</p>

        <div className=" flex gap-8">
          <Link href="/room" className="bg-red-500 text-white py-2 px-6 rounded-full font-bold  hover:bg-red-900 transition-colors  text-lg  hover:scale-105 hover:shadow-lg md:px-10">
            Book Now
          </Link>
          <Link href="/contact" className="bg-transparent border border-amber-400 text-white py-2 px-6 rounded-full font-bold  hover:bg-red-900 transition-colors  text-lg  hover:scale-105 hover:shadow-lg md:px-10 ">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
