import Image from "next/image";
import Link from "next/link";
import { IoPeopleCircle } from "react-icons/io5";

const Card = () => {
  return (
    <div className="bg-blue-950 shadow-sm  rounded-sm ">
      <div className="h-65 w-auto relative rounded-t-sm">
        <Image src="/hero.jpg" alt="card" className="w-full h-full object-cover rounded-t-sm" width={384} height={256} />
      </div>

      <div className="p-8 text-white">
        <h4 className="text-2xl font-medium">Luxiry Room</h4>

        <h4 className="mb-7 text-2xl">
          <span>Rp 21.000</span>
          <span>/Night</span>
        </h4>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 ">
            <IoPeopleCircle className="size-10" />
            <span className="text-lg font-bold">2 people</span>
          </div>

          <Link href="#" className="block bg-blue-400  font-bold px-5 py-2 rounded-full ">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
