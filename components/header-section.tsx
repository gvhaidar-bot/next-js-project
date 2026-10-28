import Image from "next/image";

const HeaderSection = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="relative  h-90 overflow-hidden text-white text-center">
      <div className="inset-0 absolute ">
        <Image src="/hero.jpg" fill alt="logo about" className="w-full h-full object-cover overflow-hidden object-center" />

        <div className="absolute inset-0 bg-black opacity-0" />

        <div className="h-80 relative flex items-center justify-center flex-col text-center mx-auto pt-20 mt-10">
          <h1 className="text-5xl mb-4 font-bold leading-tight">{title}</h1>
          <p className="text-2xl font-semibold leading-tight tracking-wider">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
