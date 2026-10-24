import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-t-white/20 bg-primary-dark text-on-dark">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/#beranda" className="text-xl font-bold">
            [Nama Restoran]
          </Link>
          <p className="mt-4 text-base leading-[1.7] text-on-dark/80">[Alamat Restoran]</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Menu</h3>
          <ul className="mt-4 space-y-3 text-base">
            <li>
              <Link href="/#beranda" className="text-on-dark/80 transition hover:text-on-dark">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/#menu" className="text-on-dark/80 transition hover:text-on-dark">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/#tentang" className="text-on-dark/80 transition hover:text-on-dark">
                Tentang
              </Link>
            </li>
            <li>
              <Link href="/#galeri" className="text-on-dark/80 transition hover:text-on-dark">
                Galeri
              </Link>
            </li>
            <li>
              <Link href="/#testimoni" className="text-on-dark/80 transition hover:text-on-dark">
                Testimoni
              </Link>
            </li>
            <li>
              <Link href="/#kontak" className="text-on-dark/80 transition hover:text-on-dark">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Menu Unggulan</h3>
          <ul className="mt-4 space-y-3 text-base">
            <li>
              <Link href="/#menu" className="text-on-dark/80 transition hover:text-on-dark">
                [Nama Menu 1]
              </Link>
            </li>
            <li>
              <Link href="/#menu" className="text-on-dark/80 transition hover:text-on-dark">
                [Nama Menu 2]
              </Link>
            </li>
            <li>
              <Link href="/#menu" className="text-on-dark/80 transition hover:text-on-dark">
                [Nama Menu 3]
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Kontak</h3>
          <ul className="mt-4 space-y-3 text-base text-on-dark/80">
            <li>Telepon: [Nomor Telepon]</li>
            <li>WhatsApp: [Nomor WhatsApp]</li>
            <li>Email: [Email Restoran]</li>
            <li>Jam buka: [Jam Buka]</li>
          </ul>
          <Link href="/#lokasi" className="mt-6 inline-flex min-h-[44px] items-center rounded-full bg-primary-accent px-7 py-3 font-semibold text-white transition hover:bg-primary">
            Lihat Lokasi di Google Maps
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] border-t border-t-white/20 px-5 py-8 text-center text-on-dark">&copy; [Nama Restoran]</div>
    </footer>
  );
};

export default Footer;
