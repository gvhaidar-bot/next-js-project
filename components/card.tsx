import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-sm transition duration-300 hover:sdaow-sm">
      <div className="h-65 w-auto rounded-t-sm relative">
        <Image src="/hero.jpg" alt="room image" width={384} height={256} className="w-full h-full  object-cover rounded-t-sm " />
      </div>

      <div className="p-8">
        <h4 className="text-2xl font-medium">
          <Link href="#" className="font-semibold text-gray-600">
            Luxiry Room
          </Link>
        </h4>
        <h4 className="mb-7 text-2xl">
          <span className="font-semibold text-gray-600">Rp 210000</span>
          <span className="text-gray-400 text-sm">/Night</span>
        </h4>

        <div className="flex items-center  justify-between">
          <div className="flex  items-center gap-2">
            <IoPeopleOutline />
            <span>2 People</span>
          </div>

          <Link href="#" className="bg-orange-400 px-6 py-2.5 md:px-10 rounded-full text-white font-bold hover:bg-orange-800 cursor-pointer   hover:scale-105 duration-300">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
