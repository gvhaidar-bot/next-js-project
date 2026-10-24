import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-dark">
      <div className="max-w-[1200px] mx-auto px-5 w-full py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="block">
              <Image src="/logo.jpg" alt="logo" width={48} height={48} className="h-12 w-12 object-contain"></Image>
            </Link>
            <p className="mt-6 text-base leading-[1.7] text-on-dark/80">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam facilis, nisi velit culpa fuga dolorum a voluptatem voluptate. Odit esse ullam natus repudiandae cupiditate maxime vitae fuga nostrum accusamus reprehenderit?
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-accent-soft">Links</h4>
            <div className="mt-3 h-1 w-8 rounded-full bg-accent"></div>
            <ul className="mt-6 space-y-3 text-base text-on-dark/70">
              <li>
                <Link href="#" className="block py-1 transition hover:text-on-dark">
                  Legal
                </Link>
              </li>

              <li>
                <Link href="#" className="block py-1 transition hover:text-on-dark">
                  Term & Conditions
                </Link>
              </li>

              <li>
                <Link href="#" className="block py-1 transition hover:text-on-dark">
                  Privacy & Policy
                </Link>
              </li>

              <li>
                <Link href="#" className="block py-1 transition hover:text-on-dark">
                  Payment Methods
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-accent-soft">News Letters</h4>
            <div className="mt-3 h-1 w-8 rounded-full bg-accent"></div>
            <p className="mt-6 text-base leading-[1.7] text-on-dark/80">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form action="">
              <div className="mt-6">
                <input className="bg-white w-full min-h-[44px] px-5 py-3 rounded-full text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-accent" type="email" placeholder="JaneDoe@email.com" />
              </div>
            </form>
            <button className="bg-primary-accent transition-colors cursor-pointer w-full min-h-[44px] text-white mt-4 px-5 py-3 rounded-full font-semibold hover:bg-primary active:scale-[0.99]">Subricbe</button>
          </div>
        </div>
      </div>

      <div className="px-5 py-6 w-full max-w-[1200px] mx-auto border-t border-t-white/20 text-center text-sm text-on-dark/70">&copy; | copyRIght | Haidargv27 | All Right Recerved</div>
    </footer>
  );
};

export default Footer;
