import Link from "next/link";

const menus = [
  {
    name: "[Nama Menu 1]",
    description: "[Deskripsi singkat menu — isi dengan bahan dan rasa asli.]",
    price: "Rp [Harga Menu]",
  },
  {
    name: "[Nama Menu 2]",
    description: "[Deskripsi singkat menu — isi dengan bahan dan rasa asli.]",
    price: "Rp [Harga Menu]",
  },
  {
    name: "[Nama Menu 3]",
    description: "[Deskripsi singkat menu — isi dengan bahan dan rasa asli.]",
    price: "Rp [Harga Menu]",
  },
];

const keunggulan = [
  {
    title: "[Keunggulan 1]",
    description: "[Isi keunggulan asli restoran.]",
  },
  {
    title: "[Keunggulan 2]",
    description: "[Isi keunggulan asli restoran.]",
  },
  {
    title: "[Keunggulan 3]",
    description: "[Isi keunggulan asli restoran.]",
  },
];

const galeri = ["[Foto 1]", "[Foto 2]", "[Foto 3]", "[Foto 4]", "[Foto 5]", "[Foto 6]"];

export default function Home() {
  return (
    <div>
      <section id="beranda" className="bg-primary-dark text-on-dark">
        <div className="mx-auto max-w-[1200px] px-5 py-24 text-center">
          <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-bold tracking-[0.12em] text-primary">SELAMAT DATANG</span>
          <h1 className="mx-auto mt-6 max-w-3xl text-[2rem] font-bold leading-[1.15] tracking-[-0.02em] md:text-[2.75rem]">Selamat Datang di [Nama Restoran]</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-[1.7] text-on-dark/80">[Deskripsi singkat restoran — ganti dengan kalimat asli tentang restoranmu.]</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#menu" className="flex min-h-[44px] items-center rounded-full bg-accent px-7 py-3.5 font-semibold text-primary-dark transition hover:bg-accent-soft">
              Lihat Menu Unggulan
            </Link>
            <Link href="#kontak" className="flex min-h-[44px] items-center rounded-full bg-white px-7 py-3.5 font-semibold text-primary transition hover:bg-warm">
              Reservasi Meja
            </Link>
          </div>
          <div className="mt-12 flex aspect-[16/9] items-center justify-center rounded-[12px] bg-primary-uplift px-5 text-center">
            <p className="text-lg font-semibold text-on-dark/80">[Foto Hidangan / Suasana Restoran]</p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-5 py-8 text-center sm:grid-cols-3">
          <div>
            <p className="text-xs font-bold tracking-[0.12em] text-accent-soft">JAM BUKA</p>
            <p className="mt-2 text-lg font-bold">[Jam Buka]</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.12em] text-accent-soft">LOKASI</p>
            <p className="mt-2 text-lg font-bold">[Lokasi Singkat]</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.12em] text-accent-soft">KONTAK</p>
            <p className="mt-2 text-lg font-bold">[Nomor WhatsApp]</p>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
          <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-bold tracking-[0.12em] text-primary">MENU UNGGULAN</span>
          <h2 className="mt-4 text-[2rem] font-bold leading-[1.25] tracking-[-0.01em]">Menu Unggulan</h2>
          <p className="mt-2 max-w-xl text-base leading-[1.7] text-muted">Tiga menu unggulan dari [Nama Restoran].</p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {menus.map((menu) => (
              <article key={menu.name} className="overflow-hidden rounded-[12px] bg-white shadow-[0_4px_24px_rgba(0,98,65,0.08)] transition hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,98,65,0.14)]">
                <div className="flex aspect-[4/3] items-center justify-center bg-warm px-5 text-center">
                  <p className="font-semibold text-muted">[Foto Menu]</p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold leading-[1.4]">{menu.name}</h3>
                  <p className="mt-2 text-base leading-[1.7] text-muted">{menu.description}</p>
                  <p className="mt-4 text-lg font-bold leading-[1.4] text-primary">{menu.price}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 rounded-[12px] bg-white px-5 py-4 text-base leading-[1.7] text-muted">[Daftar menu lengkap — isi setelah data menu dari pemilik restoran.]</p>
        </div>
      </section>

      <section id="tentang" className="bg-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="flex aspect-[4/3] items-center justify-center rounded-[12px] bg-warm px-5 text-center">
            <p className="font-semibold text-muted">[Foto Suasana Restoran]</p>
          </div>
          <div>
            <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-bold tracking-[0.12em] text-primary">TENTANG KAMI</span>
            <h2 className="mt-4 text-[2rem] font-bold leading-[1.25] tracking-[-0.01em]">Kenapa Memilih Kami</h2>
            <p className="mt-2 text-base leading-[1.7] text-muted">[Cerita singkat restoran — isi dengan cerita asli restoran.]</p>
            <ul className="mt-8 space-y-6">
              {keunggulan.map((item, index) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-soft text-base font-bold text-primary">{index + 1}</span>
                  <span>
                    <span className="block text-lg font-bold">{item.title}</span>
                    <span className="mt-1 block text-base leading-[1.7] text-muted">{item.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="galeri" className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
          <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-bold tracking-[0.12em] text-primary">GALERI</span>
          <h2 className="mt-4 text-[2rem] font-bold leading-[1.25] tracking-[-0.01em]">Galeri Suasana &amp; Hidangan</h2>
          <p className="mt-2 max-w-xl text-base leading-[1.7] text-muted">Suasana dan hidangan di [Nama Restoran].</p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galeri.map((foto) => (
              <div key={foto} className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-[12px] bg-white px-5 text-center shadow-[0_4px_24px_rgba(0,98,65,0.08)]">
                <p className="font-bold">{foto}</p>
                <p className="text-base text-muted">[Keterangan foto.]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimoni" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
          <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-bold tracking-[0.12em] text-primary">TESTIMONI</span>
          <h2 className="mt-4 text-[2rem] font-bold leading-[1.25] tracking-[-0.01em]">Testimoni Pelanggan</h2>
          <div className="mt-10 rounded-[12px] bg-warm p-6">
            <p className="text-base leading-[1.7] text-muted">Testimoni belum diisi — kirim testimoni asli pelanggan, nanti Grace masukkan ke sini. Section ini sengaja tidak diisi kutipan karangan.</p>
            <p className="mt-4 font-bold">[Nama Pelanggan]</p>
            <p className="text-base text-muted">[Keterangan Pelanggan]</p>
          </div>
        </div>
      </section>

      <section id="lokasi" className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
          <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-bold tracking-[0.12em] text-primary">LOKASI</span>
          <h2 className="mt-4 text-[2rem] font-bold leading-[1.25] tracking-[-0.01em]">Lokasi &amp; Jam Buka</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-[12px] bg-white p-6 shadow-[0_4px_24px_rgba(0,98,65,0.08)]">
              <h3 className="text-xl font-bold">Alamat</h3>
              <p className="mt-2 text-base leading-[1.7] text-muted">[Alamat Restoran]</p>
              <p className="mt-4 text-base leading-[1.7]">Telepon: <span className="text-muted">[Nomor Telepon]</span></p>
              <p className="text-base leading-[1.7]">WhatsApp: <span className="text-muted">[Nomor WhatsApp]</span></p>
              <p className="text-base leading-[1.7]">Email: <span className="text-muted">[Email Restoran]</span></p>
            </div>
            <div className="rounded-[12px] bg-white p-6 shadow-[0_4px_24px_rgba(0,98,65,0.08)]">
              <h3 className="text-xl font-bold">Jam Buka</h3>
              <p className="mt-2 text-base leading-[1.7] text-muted">[Jam Buka per hari — isi sesuai jam asli restoran.]</p>
              <Link href="https://maps.google.com/?q=[Alamat Restoran]" className="mt-6 inline-flex min-h-[44px] items-center rounded-full bg-primary-accent px-7 py-3 font-semibold text-white transition hover:bg-primary">
                Lihat Lokasi di Google Maps
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" className="bg-primary-dark text-on-dark">
        <div className="mx-auto max-w-[1200px] px-5 py-16 text-center md:py-24">
          <h2 className="text-[2rem] font-bold leading-[1.25] tracking-[-0.01em]">Sudah Lapar? Pesan Tempatmu Sekarang.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-[1.7] text-on-dark/80">Hubungi [Nama Restoran] untuk reservasi. Konfirmasi reservasi bergantung pada balasan restoran.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="https://wa.me/[Nomor WhatsApp]" className="flex min-h-[44px] items-center rounded-full bg-primary-accent px-7 py-3.5 font-semibold text-white transition hover:bg-primary">
              Reservasi via WhatsApp
            </Link>
            <Link href="#lokasi" className="flex min-h-[44px] items-center rounded-full bg-white px-7 py-3.5 font-semibold text-primary transition hover:bg-warm">
              Lihat Lokasi di Google Maps
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
