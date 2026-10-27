import HeaderSection from "@/components/header-section";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

const AboutPage = () => {
  return (
    <div>
      <HeaderSection title="about page" subTitle="lorem ipsum" />

      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-8 ">
          <Image src="/about.jpg" alt="about image" width={650} height={579} className="rounded-2xl" />

          <div>
            <h1 className="text-5xl mb-4 capitalize leading-tight tracking-wider font-semibold text-gray-900">Who We are</h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error, ad vitae minima accusantium labore illum quae eveniet aliquam illo quibusdam, impedit vel exercitationem cupiditate aut, iure mollitia libero quis.
            </p>

            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vision</h4>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </li>

              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="size-7" />
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vision</h4>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
