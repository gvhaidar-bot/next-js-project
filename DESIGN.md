---
version: alpha
name: Restoran — Gaya Starbucks
description: Sistem desain website promosi restoran untuk pelanggan. Next.js, SEO-first, mobile-first. Referensi utama Starbucks, kartu foto Airbnb, hero Apple. BUKAN aplikasi pesan-antar, kasir, atau toko online.
colors:
  primary: "#006241"
  primary-accent: "#00754A"
  primary-dark: "#1E3932"
  primary-uplift: "#2B5148"
  primary-soft: "#D4E9E2"
  accent: "#CBA258"
  accent-soft: "#DFC49D"
  background: "#F2F0EB"
  surface: "#FFFFFF"
  surface-warm: "#EDEBE9"
  text-primary: "#222222"
  text-secondary: "#5E5E5E"
  text-on-dark: "#F2F0EB"
typography:
  h1:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 2.75rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.02em
  h2:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.01em
  h3:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.4
  body-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
  label-caps:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.12em
  menu-price:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 1.125rem
    fontWeight: 700
    lineHeight: 1.4
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary-accent}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-gold:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  card-menu:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: 16px
  card-testimoni:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: 24px
  navbar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    height: 72px
  hero:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.text-on-dark}"
    padding: 96px 24px
  info-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    padding: 32px 24px
  footer:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.text-on-dark}"
    padding: 64px 24px
  chip-eyebrow:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  menu-price:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.menu-price}"
  floating-cta:
    backgroundColor: "{colors.primary-accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: 16px
  card-description:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-md}"
  info-label:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.accent-soft}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  dark-accent-band:
    backgroundColor: "{colors.primary-uplift}"
    textColor: "{colors.text-on-dark}"
    padding: 32px 24px
---

## Overview

Website promosi restoran — bukan aplikasi pesan-antar, bukan kasir, bukan toko online, dan bukan portal member.

Satu kalimat penuntun untuk semua keputusan desain:

> Restoran yang hangat dan bisa dipercaya — hijau yang teduh, krem yang nyaman, foto hidangan dan suasana yang menggugah selera, dan informasi yang bisa ditemukan pelanggan dalam hitungan detik.

Audiens utama adalah pelanggan yang sedang memilih tempat makan: keluarga, teman, pasangan, dan pekerja yang mencari makan siang. Mereka membuka website dari HP, sering lewat tautan WhatsApp atau Google Maps, dan mereka memutuskan dari kesan pertama: apakah tempatnya nyaman, menunya jelas, harganya transparan, dan mudah dihubungi atau dipesan tempatnya.

Tujuan website hanya satu: **memperkenalkan dan mempromosikan restoran** — menu unggulan, suasana, cerita singkat, testimoni, lokasi, dan jam buka — sampai pelanggan yakin untuk datang atau reservasi.

Referensi yang mengikat:

- **Warna, ritme halaman, dan tombol pill: Starbucks** — hijau tua, krem hangat, pita hijau tua di antara section krem dan putih, tombol berbentuk pill. Yang dipakai hanya sistem gayanya, bukan nama, logo, atau merek Starbucks.
- **Kartu foto: Airbnb** — foto adalah bintang utama pada kartu menu, galeri, dan testimoni. Warna asli Airbnb (pink/merah) tidak dipakai, diganti hijau restoran.
- **Hero: Apple** — satu foto full-width, satu headline besar, dua tombol. Tidak lebih.
- **Font: pengganti gratis** — font asli Starbucks (SoDoSans) adalah font proprietary dan tidak dipakai di sini. Penggantinya yang terkunci adalah Plus Jakarta Sans, agar mudah dipakai di Next.js lewat Google Fonts.

Website ini dibangun dengan **Next.js (App Router)**. Konten homepage ada di `app/page.js`. Navbar dan Footer adalah komponen reusable yang dipasang satu kali di `app/layout.js` dan tampil di semua halaman.

File ini adalah aturan desain yang **wajib** diikuti setiap AI/agent yang mengerjakan website ini. Jika instruksi lain bertentangan dengan file ini dalam hal tampilan, file ini yang menang untuk tampilan. Jika ada hal yang tidak diatur di file ini, agent harus bertanya kepada pemilik project, bukan mengarang sendiri.

## Colors

Palet ini terkunci. Agent tidak boleh memperkenalkan warna baru.

- **Primary ({colors.primary}, #006241):** Hijau Starbucks. Warna utama merek — judul aksen, ikon, tautan, dan elemen interaktif utama.
- **Primary Accent ({colors.primary-accent}, #00754A):** Hijau yang sedikit lebih terang. Warna isi tombol utama dan tombol mengambang (floating CTA).
- **Primary Dark ({colors.primary-dark}, #1E3932):** Hijau sangat tua. Untuk latar hero, CTA penutup, dan Footer selalu memakai warna ini.
- **Primary Uplift ({colors.primary-uplift}, #2B5148):** Hijau tua menengah. Hanya untuk aksen dekoratif hemat di atas latar gelap.
- **Primary Soft ({colors.primary-soft}, #D4E9E2):** Hijau sangat muda. Untuk latar chip, badge, dan lingkaran ikon. Bukan untuk latar section besar.
- **Accent ({colors.accent}, #CBA258):** Emas. Hanya untuk aksen kecil yang penting — garis pembatas pendek, bintang rating, label-caps di atas judul, dan tombol emas khusus di atas foto atau latar hijau tua. Emas **tidak pernah** dipakai untuk teks isi, dan tidak pernah untuk teks kecil di atas latar putih/krem karena kontrasnya tidak cukup.
- **Accent Soft ({colors.accent-soft}, #DFC49D):** Emas lembut untuk label kecil di atas latar hijau dan detail hover aksen.
- **Background ({colors.background}, #F2F0EB):** Krem hangat. Latar dasar halaman, bergantian dengan Surface.
- **Surface ({colors.surface}, #FFFFFF):** Putih bersih untuk kartu dan section selingan.
- **Surface Warm ({colors.surface-warm}, #EDEBE9):** Krem sedikit lebih gelap untuk kartu testimoni dan section yang ingin terasa hangat.
- **Text Primary ({colors.text-primary}, #222222):** Hitam hangat. Semua judul dan teks utama. Bukan hitam murni untuk latar, dan teks di atas latar terang tidak memakai hitam pekat yang dingin.
- **Text Secondary ({colors.text-secondary}, #5E5E5E):** Abu hangat. Untuk deskripsi, caption, harga pendamping, dan metadata. Tidak untuk teks penting yang harus dibaca cepat.
- **Text on Dark ({colors.text-on-dark}, #F2F0EB):** Krem terang untuk teks di atas Primary Dark.

Aturan pakai warna:

- Perbandingan latar dalam satu halaman kurang lebih: 60% krem/putih, 30% hijau, 10% emas sebagai aksen.
- Satu section = satu warna latar. Jangan mencampur dua warna latar dalam satu section.
- Gradasi (gradient) dilarang, kecuali overlay hijau tua transparan di atas foto hero agar teks terbaca. Gradasi merah, ungu, biru, pink, atau pelangi dilarang total.
- Mode gelap (dark mode) tidak dibuat.

## Typography

Satu keluarga font Latin untuk semuanya: **Plus Jakarta Sans**. Font ini modern, ramah, dan terbaca jelas di layar HP kecil.

- **H1 ({typography.h1}):** Hanya satu H1 per halaman, yaitu headline hero atau judul halaman. Di HP ukurannya turun menjadi 2rem. Tidak pernah memakai huruf kapital semua.
- **H2 ({typography.h2}):** Judul section. Selalu didahului label-caps hijau/emas kecil, contoh: `MENU UNGGULAN`, lalu H2, lalu satu kalimat penjelasan di bawahnya.
- **H3 ({typography.h3}):** Judul kartu (nama hidangan, nama keunggulan, judul galeri).
- **Body ({typography.body-md} dan {typography.body-lg}):** Ukuran minimum teks isi adalah 16px dengan line-height 1.7. Pelanggan tidak boleh perlu memperbesar layar untuk membaca. Paragraf maksimal sekitar 3 baris sebelum diberi jarak.
- **Label Caps ({typography.label-caps}):** Huruf kapital kecil berjarak untuk label section dan badge. Hanya untuk teks pendek, maksimal 3 kata.
- **Menu Price ({typography.menu-price}):** Harga hidangan selalu memakai token ini, warna Primary, dan ditulis lengkap dengan mata uang, contoh pola: `Rp [Harga]`. Harga tidak pernah ditulis tanpa mata uang dan tidak pernah disembunyikan di dalam gambar.

Hierarki judul HTML wajib mengikuti hierarki visual: H1 → H2 → H3, tanpa melompat. Ini aturan desain sekaligus aturan SEO, tidak boleh ditukar demi tampilan.

## Layout

- **Mobile-first.** Rancang untuk lebar 360px dulu, baru tablet, baru desktop. Mayoritas pengunjung membuka dari HP.
- Lebar konten maksimal **1200px**, dengan padding samping 20px di HP dan 24px di desktop. Konten tidak pernah menempel ke tepi layar.
- Grid desktop 12 kolom. Kartu menu/testimoni: **3 kolom di desktop, 2 kolom di tablet, 1 kolom di HP.** Tidak pernah 4 kolom untuk kartu berisi teks dan harga.
- Jarak antar-section adalah {spacing.section} (96px) di desktop dan 64px di HP. Ritme latar section homepage harus bergantian:

  `Hero (hijau tua + foto) → Krem → Putih → Pita Info (hijau) → Krem → Putih → Krem → Putih → CTA (hijau tua) → Footer (hijau tua)`

- Urutan section homepage terkunci, tidak boleh ditambah, dikurangi, atau ditukar tanpa persetujuan pemilik project:

  1. Hero
  2. Info Singkat (jam buka, lokasi, kontak)
  3. Menu Unggulan
  4. Tentang / Kenapa Memilih Kami
  5. Galeri Suasana & Hidangan
  6. Testimoni Pelanggan
  7. Lokasi & Jam Buka (detail)
  8. CTA penutup: Reservasi / Hubungi Restoran
  9. Footer

- Menu utama terkunci, hanya enam ini: **Beranda, Menu, Tentang, Galeri, Testimoni, Kontak.** Tidak ada menu lain di navbar.
- Semua target sentuh (tombol, menu, tautan kartu) minimal setinggi **44px**.
- Foto memakai komponen `next/image`, rasio konsisten dalam satu baris kartu (4:3 untuk menu dan galeri, 16:9 untuk hero), dan selalu memiliki teks alt yang menjelaskan isi foto — bukan "gambar1" dan bukan teks yang sama dengan judul.

## Elevation & Depth

Desain ini datar dan tenang. Kedalaman hanya dari bayangan yang sangat lembut dan dari perbedaan warna latar section.

- Bayangan kartu standar: `0 4px 24px rgba(0, 98, 65, 0.08)`.
- Bayangan kartu saat hover (desktop saja): `0 8px 32px rgba(0, 98, 65, 0.14)`, dan kartu naik maksimal 4px. Tidak ada animasi memantul, berputar, atau membesar berlebihan.
- Tidak ada bayangan keras, tidak ada efek kaca (glassmorphism), tidak ada neumorphism.
- Tombol mengambang (floating CTA) adalah satu-satunya elemen melayang yang diizinkan: lingkaran 56px, warna Primary Accent, bayangan berlapis lembut, dan saat ditekan mengecil menjadi skala 0.95. Tombol ini hanya untuk Reservasi, dan tidak boleh dipakai bersamaan dengan tombol WhatsApp mengambang kedua.

## Shapes

- **Tombol selalu berbentuk pill** ({rounded.full}), mengikuti ritme Starbucks.
- Kartu memakai sudut {rounded.md} (12px) mengikuti Starbucks. Kartu kecil dan chip memakai pill atau 12px.
- Ikon memakai satu set ikon garis (line icon) yang konsisten, warna Primary atau Accent, ukuran 24px di dalam lingkaran Primary Soft. Tidak mencampur ikon garis, ikon penuh warna, emoji, dan ilustrasi dalam satu halaman. **Emoji tidak dipakai sebagai ikon.**
- Foto selalu asli: hidangan restoran, suasana ruangan, dan kegiatan di restoran. Foto stok generik yang tidak mirip hidangan/tempat asli, kartun, dan ilustrasi 3D dilarang. Jika foto asli belum ada, pakai placeholder yang jelas, bukan foto yang menyesatkan.

## Components

### Navbar

Tinggi 72px, latar Surface, menempel di atas (sticky) dengan bayangan sangat tipis saat halaman digulir. Isi dari kiri ke kanan: logo + nama restoran, menu enam item, dan satu tombol pill Primary bertuliskan **Reservasi** yang menuju halaman Kontak / WhatsApp. Di HP, menu menjadi hamburger. Tidak ada tombol lain di navbar.

### Hero

Foto full-width hidangan atau suasana restoran dengan overlay Primary Dark transparan. Isi maksimal: satu label-caps, satu H1, satu paragraf maksimal dua baris, dan tepat dua tombol:

1. **Lihat Menu Unggulan** — tombol emas ({components.button-gold}) di atas foto.
2. **Reservasi Meja** — tombol sekunder terang.

Tidak ada tombol ketiga, tidak ada slider/carousel hero, tidak ada video autoplay, dan tidak ada teks berjalan.

### Pita Info Singkat

Latar Primary, maksimal empat info: jam buka, lokasi singkat, nomor kontak, dan rating — hanya jika datanya sudah diberikan pemilik project. Angka/teks utama berwarna putih dan label kecil berwarna Accent Soft di bawahnya. **Agent tidak boleh mengarang jam buka, alamat, nomor, atau rating.** Jika datanya belum ada, tulis placeholder yang jelas seperti `[Jam Buka]` — jangan mengisi data karangan.

### Kartu Menu Unggulan

Tepat **tiga kartu** di homepage. Nama hidangan mengikuti data asli restoran, agent tidak boleh mengarang menu. Setiap kartu: foto 4:3 di atas, H3 nama hidangan, deskripsi 2 baris, harga dengan token Menu Price, dan label hanya jika benar, contoh: Signature, Pedas, atau Best Seller. Seluruh kartu bisa diklik menuju halaman atau jangkar Menu. Menu lengkap berada di halaman Menu, bukan ditumpuk semua di homepage.

### Tentang / Kenapa Memilih Kami

Satu foto suasana di satu sisi dan teks di sisi lain (bertumpuk di HP). Maksimal tiga keunggulan, masing-masing dengan satu ikon garis dan satu kalimat penjelasan. Cerita restoran ditulis singkat dan faktual, tanpa klaim yang tidak bisa dibuktikan.

### Galeri Suasana & Hidangan

Foto sebagai elemen terbesar (pola Airbnb): foto 4:3 memenuhi bagian atas kartu atau grid galeri, judul dan satu baris keterangan di bawahnya. Galeri memakai grid foto yang rapi dengan jarak {spacing.md}. Tidak ada teks panjang di dalam galeri.

### Testimoni

Kartu Surface Warm. Isi: kutipan pelanggan maksimal tiga baris, nama, dan keterangan singkat (contoh: Pelanggan). Bintang rating memakai Accent dan hanya ditampilkan jika rating itu benar dari sumber yang jelas. Testimoni tidak boleh dikarang — jika belum ada testimoni asli, section ini dikosongkan dan diberi catatan placeholder untuk pemilik project, bukan diisi kutipan fiktif.

### Lokasi & Jam Buka

Alamat lengkap, tautan atau peta tertanam Google Maps, nomor telepon, WhatsApp, dan tabel jam buka per hari dalam format Indonesia. Jika ada hari libur atau jam khusus, tulis apa adanya dari pemilik project. Jangan menulis "buka setiap hari" bila belum dikonfirmasi.

### CTA Penutup

Satu section Primary Dark sebelum footer: satu H2 ajakan yang bersifat informatif, contoh pola: "Sudah Lapar? Pesan Tempatmu Sekarang." dan dua tombol: **Reservasi via WhatsApp** dan **Lihat Lokasi di Google Maps**. Ini adalah ajakan untuk reservasi dan berkunjung, bukan pemesanan makanan berbayar. Konfirmasi reservasi tetap bergantung pada balasan restoran, jangan menulis seolah meja otomatis terpesan.

### Footer

Latar Primary Dark, teks Text on Dark. Empat kolom di desktop (bertumpuk di HP): identitas restoran + alamat, menu, menu unggulan, dan kontak (telepon, WhatsApp, email, jam layanan) + tautan Google Maps. Baris bawah: hak cipta dan nama restoran.

## Do's and Don'ts

### Do

- Selalu baca file ini dari awal sampai akhir sebelum menulis atau mengubah UI apa pun.
- Pakai hanya warna, font, spacing, dan radius yang terdaftar di file ini. Jika butuh nilai yang belum ada, tanyakan pemilik project.
- Tulis semua teks dalam Bahasa Indonesia yang hangat, jelas, dan sopan untuk pelanggan. Hindari istilah teknis dan bahasa Inggris yang tidak perlu.
- Jadikan setiap halaman punya satu H1, metadata judul dan deskripsi yang unik, dan teks yang benar-benar berupa teks (bukan teks di dalam gambar) agar terbaca Google.
- Uji tampilan di lebar HP 360px sebelum menyatakan selesai. Jika rusak di HP, berarti belum selesai.
- Gunakan placeholder yang terlihat jelas seperti `[Nama Restoran]`, `[Alamat Restoran]`, `[Nomor WhatsApp]`, `[Harga Menu]`, `[Jam Buka]` untuk data yang belum diberikan. Placeholder lebih baik daripada data karangan.

### Don't — Aturan Keras

- **JANGAN menambahkan pemesanan online, keranjang, checkout, pembayaran, login, dashboard, atau kasir** ke website promosi ini tanpa keputusan eksplisit pemilik project. Website ini promosi profil restoran, bukan aplikasi transaksi.
- **JANGAN memakai warna di luar palet.** Dilarang khususnya: merah fast-food, pink/merah Airbnb (#FF385C), ungu Stripe, biru generik template, hijau WhatsApp terang sebagai warna merek, dan hitam murni (#000000) untuk teks atau latar.
- **JANGAN mengganti font**, menambah keluarga font Latin kedua, atau memakai font dekoratif untuk teks isi. Font asli Starbucks (SoDoSans) tidak dipakai karena proprietary.
- **JANGAN menyalin nama, logo, atau merek Starbucks** ke website ini. Yang diadaptasi hanya sistem gayanya.
- **JANGAN menambah halaman, section, menu, atau komponen baru** yang tidak ada di file ini tanpa persetujuan pemilik project. Kreatif di dalam aturan, bukan menambah aturan sendiri.
- **JANGAN mengarang data restoran:** nama restoran, alamat, nama menu, harga, jam buka, rating, nama koki, testimoni, dan status halal harus berasal dari pemilik project. Status halal khususnya tidak boleh diasumsikan — hanya ditulis bila pemilik project menyatakan dan, bila ada, menyertakan dasarnya.
- **JANGAN memakai klaim superlatif tanpa data**, seperti "terbaik se-Indonesia", "nomor satu", atau "dijamin enak". Promosi harus meyakinkan lewat foto, menu yang jelas, dan testimoni asli, bukan lewat klaim kosong.
- **JANGAN menyembunyikan informasi penting di dalam gambar, slider, atau tab** yang tidak terbaca mesin pencari dan sulit ditemukan pelanggan.
- **JANGAN memakai animasi berlebihan:** tidak ada parallax berat, tidak ada animasi masuk dari segala arah, tidak ada elemen melayang selain satu tombol Reservasi mengambang.
- **JANGAN membuat halaman terlihat seperti website SaaS/startup, fintech, atau toko online.** Tidak ada pricing table, dashboard, login pelanggan, atau fitur kasir dalam website promosi ini.

## Agent Prompt Guide

Untuk agent/AI yang membaca file ini:

1. Baca seluruh file ini sebelum menghasilkan kode. Ringkas kembali dalam satu kalimat: palet apa, font apa, urutan section homepage apa, dan apa larangan kerasnya. Jika ringkasan itu salah, perbaiki pemahamanmu sebelum lanjut.
2. Saat membuat komponen, sebutkan token yang kamu pakai (contoh: latar `{colors.background}`, tombol `{components.button-primary}`) agar pemilik project bisa memeriksa kepatuhanmu.
3. Jika permintaan pengguna bertentangan dengan file ini — misalnya meminta keranjang belanja, warna baru, atau font baru — **jangan langsung menurut**. Tunjukkan pertentangannya, sebutkan aturan di file ini yang dilanggar, dan minta keputusan pemilik project. Keputusan pemilik project yang eksplisit selalu mengalahkan file ini, tetapi perubahan itu harus dicatat kembali ke file ini.
4. Selesaikan satu komponen dalam satu waktu, tampilkan hasilnya, dan periksa: apakah warnanya dari palet, apakah teksnya minimal 16px, apakah tampil rapi di 360px, dan apakah ada unsur transaksi atau data karangan yang tidak sengaja masuk. Jika ada satu saja yang gagal, perbaiki sebelum lanjut ke komponen berikutnya.
5. Jangan menambahkan komentar yang tidak perlu di dalam kode, kecuali pemilik project memintanya.

Contoh perintah yang benar dari pemilik project:

> Ikuti DESIGN.md di root project ini. Buatkan section Menu Unggulan untuk homepage: tiga kartu sesuai komponen Kartu Menu Unggulan, pakai token warna dan font dari file itu, tanpa unsur pemesanan berbayar apa pun.
