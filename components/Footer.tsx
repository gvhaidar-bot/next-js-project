import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 w-full py-8 md:py-16">
        <div className="grid md:grid-cols-3 gap-7">
          <div>
            <Link href="/" className="block mb-10">
              <Image src="/logo.jpg" alt="logo" width={80} height={50}></Image>
            </Link>
            <p className="text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam facilis, nisi velit culpa fuga dolorum a voluptatem voluptate. Odit esse ullam natus repudiandae cupiditate maxime vitae fuga nostrum accusamus reprehenderit?
            </p>
          </div>

          <div>
            <div className="flex gap-20">
              <div className="flex-1  md:flex-none">
                <h4 className="text-gray-50 font-bold text-xl mb-10 ">Links</h4>
                <ul className="space-y-4  list-item text-gray-500">
                  <li>
                    <Link href="#">Legal</Link>
                  </li>

                  <li>
                    <Link href="#">Term & Conditions</Link>
                  </li>

                  <li>
                    <Link href="#">Privacy & Policy</Link>
                  </li>

                  <li>
                    <Link href="#">Payment Methods</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-gray-50 text-xl ">News Letters</h4>
            <p className="text-gray-300 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form action="">
              <div className="mb-5">
                <input className="bg-white w-full p-3 rounded-sm " type="email" placeholder="JaneDoe@email.com" />
              </div>
            </form>
            <button className="bg-violet-500 transition-colors  cursor-pointer w-full  text-white p-3 rounded-sm font-semibold hover:bg-violet-950">Subricbe</button>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 w-full max-w-7xl mx-auto border-t border-t-gray-600 text-center text-white  ">&copy; | copyRIght | Haidargv27 | All Right Recerved</div>
    </footer>
  );
};

export default Footer;
