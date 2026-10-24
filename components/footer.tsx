import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 w-full  py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-7 ">
          <div>
            <Link href="/" className="block mb-10">
              <Image src="/logo.jpg" width={128} height={49} alt="logo" />
            </Link>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi numquam impedit harum! Error obcaecati magni totam nulla expedita saepe pariatur aut voluptate sed, quibusdam suscipit in quae officiis tempora.
            </p>
          </div>

          <div>
            <div className="flex gap-20">
              <div className="flex-1  md:flex-none">
                <h4 className="mb-8 text-white font-semibold text-xl ">Links</h4>
                <ul className="list-item space-y-5 text-gray-500">
                  <li>
                    <Link href="#">Legal</Link>
                  </li>

                  <li>
                    <Link href="#">Term & Condition</Link>
                  </li>

                  <li>
                    <Link href="#">Paymend Method</Link>
                  </li>

                  <li>
                    <Link href="#">Privacy & Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-white font-bold text-xl ">NewsLetter</h4>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <form action="" className="mt-5">
              <div className="mb-5">
                <input className="w-full p-3 bg-white rounded-sm" type="email" placeholder="janeDoe@email.com" />
              </div>

              <button className="bg-orange-400 p-3 w-full font-bold text-white  rounded-sm  hover:bg-orange-500 cursor-pointer">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-t-gray-500 py-8 text-center text-base text-gray-500 ">&copy; copyRight | Haidar |All Right Reserved</div>
    </footer>
  );
};

export default Footer;
