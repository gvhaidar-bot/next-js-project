import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-dark">
      <div className="max-w-[1200px] mx-auto px-5 w-full py-8 md:py-16">
        <div className="grid md:grid-cols-3 gap-7">
          <div>
            <Link href="/" className="block mb-10">
              <Image src="/logo.jpg" alt="logo" width={80} height={50}></Image>
            </Link>
            <p className="text-on-dark/80">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam facilis, nisi velit culpa fuga dolorum a voluptatem voluptate. Odit esse ullam natus repudiandae cupiditate maxime vitae fuga nostrum accusamus reprehenderit?
            </p>
          </div>

          <div>
            <div className="flex gap-20">
              <div className="flex-1  md:flex-none">
                <h4 className="text-on-dark font-bold text-xl mb-10 ">Links</h4>
                <ul className="space-y-4  list-item text-on-dark/70">
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
            <h4 className="mb-4 font-bold text-on-dark text-xl ">News Letters</h4>
            <p className="text-on-dark/80 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form action="">
              <div className="mb-5">
                <input className="bg-white w-full p-3 rounded-md text-ink" type="email" placeholder="JaneDoe@email.com" />
              </div>
            </form>
            <button className="bg-primary-accent transition-colors  cursor-pointer w-full  text-white p-3 rounded-full font-semibold hover:bg-primary">Subricbe</button>
          </div>
        </div>
      </div>

      <div className="px-5 py-8 w-full max-w-[1200px] mx-auto border-t border-t-white/20 text-center text-on-dark  ">&copy; | copyRIght | Haidargv27 | All Right Recerved</div>
    </footer>
  );
};

export default Footer;
