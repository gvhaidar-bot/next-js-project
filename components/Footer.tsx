import Image from "next/image";
import { BsYoutube } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdMap } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-gray-50">
      <div className="py-10 px-6  md:py-16 w-full">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-center mx-auto">
            <Image src="/logo.jpg" alt="logo" width={120} height={80} />
          </div>

          <div className="space-y-8">
            <h3 className="font-bold leading-tight text-xl">Customer Center</h3>

            <div className="">
              <div className="max-w-xl mb-4 flex  gap-3">
                <MdMap className="w-7 h-7" />
                <p className="text-sm tracking-wider">Thamrin Plaza. Jl. M.H. Thamrin Kav. 8-9 Lt. PH. Kebon Melati, Tanah Abang, Jakarta Pusat</p>
              </div>

              <div className="max-w-xl flex  gap-3 items-center">
                <FaWhatsapp className="w-7 h-7" />
                <p className="text-sm leading-tight font-bold">0812-1111-8456</p>
              </div>
            </div>
          </div>

          <div className="max-w-xl ">
            <h3 className="text-sm mb-4 font-bold text-xl">Consumer Complaints Service Contact Information</h3>
            <div className="flex gap-4  mt-4">
              <MdMap />
              <div>
                <p className="text-sm mb-2 tracking-wider">
                  Thamrin Plaza. Jl. M.H. Thamrin Kav. 8-9 Lt. PH. Kebon Melati, Tanah Abang, Jakarta Pusat. <br />
                </p>
                <span className="text-sm italic font-semibold">WhatsApp Ditjen PKTN: 0853-1111-1010</span>
              </div>
            </div>
            <p></p>
          </div>
        </div>

        <div className="mt-8 justify-between w-full text-center md:text-left md:flex space-y-8 ">
          <p className="text-sm font-bold leading-tight tracking-wider px-40">All rights reserved ● Terms and Conditions ● Privacy Policy</p>

          <div className="mx-auto flex gap-2 justify-center items-center">
            <div className="bg-gray-600 p-3 rounded-full cursor-pointer hover:scale-105 hover:bg-gray-900 transition-colors">
              <BsYoutube className="w-5 h-5" />
            </div>
            <div className="bg-gray-600 p-3 rounded-full cursor-pointer hover:scale-105 hover:bg-gray-900 transition-colors">
              <BsYoutube className="w-5 h-5" />
            </div>
            <div className="bg-gray-600 p-3 rounded-full cursor-pointer hover:scale-105 hover:bg-gray-900 transition-colors flex items-center justify-center">
              <BsYoutube className="w-5 h-5 text-center" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
