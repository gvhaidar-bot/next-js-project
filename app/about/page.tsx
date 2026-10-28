import HeaderSection from "@/components/header-section";
import type { Metadata } from "next";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "about",
  description: "about our hotel",
};

const AboutPage = () => {
  return (
    <div>
      <HeaderSection title="About Hotel" subTitle="Lexure Hotel" />

      <div className="py-20 max-w-7xl px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          <Image src="/about.jpg" width={650} height={579} alt="hotel image" className="rounded-2xl" />

          <div>
            <h1 className="text-xl text-bold leading-tight tracking-widest">Our Hotel</h1>
            <p className="mt-1 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quos mollitia deserunt nemo facere quod quia necessitatibus cumque.</p>

            <ul className="list-item space-y-4 pt-8">
              <li className="flex gap-4">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-5" />
                </div>

                <div className="flex-1 ">
                  <h4 className="text-lg font-semibold mb-1 leading-tight tracking-widest">Vision</h4>
                  <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
