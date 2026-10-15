# AstraHOME WiFi

Website promosi dan pendaftaran mandiri untuk layanan internet broadband. Dibuat dengan Vite, React, TypeScript, Tailwind CSS, dan validasi Zod. Konten paket disimpan terpisah agar mudah diperbarui.

## Fitur

- Halaman responsif dengan tema dark glassmorphism dan aksen cyan/violet.
- Paket 10, 20, 30, dan 40 Mbps mengikuti materi AstraHOME.
- Kalkulator bandwidth berdasarkan jumlah ponsel, komputer, dan TV.
- Pemeriksaan cakupan melalui WhatsApp; lokasi browser hanya digunakan setelah pengguna menekan tombol lokasi.
- Form pemesanan tervalidasi, ringkasan paket, koordinat opsional, dan pesan WhatsApp otomatis.
- FAQ interaktif, navigasi mobile, dan tombol chat.
- Data bisnis, paket, promo, bandwidth, cakupan, dan FAQ disimpan di folder src/data.
- Skrip untuk mengemas project menjadi satu file ZIP.

## Menjalankan di komputer lokal

Persyaratan: Node.js 22.12 atau yang lebih baru dan npm.

1. Ekstrak arsip dan buka terminal di folder project.
2. Jalankan perintah: npm install
3. Jalankan perintah: npm run dev
4. Buka http://localhost:3000

## Build dan deploy

- Pemeriksaan TypeScript: npm run typecheck
- Membuat situs siap deploy di folder dist: npm run build
- Pratinjau build: npm run start, lalu buka http://localhost:3000
- Deploy folder dist ke layanan hosting statis seperti Netlify, Vercel, Cloudflare Pages, atau web server.
- Buat arsip project dengan npm run zip. Arsip diletakkan satu tingkat di atas folder project dan tidak menyertakan node_modules maupun dist.

## Konfigurasi

Salin .env.example menjadi .env jika ingin membatasi hostname. Isi VITE_ALLOWED_HOSTS dengan hostname dipisahkan koma. Biarkan kosong agar localhost maupun domain deploy bisa digunakan.

Nomor WhatsApp ada di src/data/business.json. Paket ada di src/data/packages.json; promo di src/data/promotions.json; kalkulasi di src/data/bandwidth.json; pesan cakupan di src/data/coverage.json; FAQ di src/data/faqs.json.

## Catatan operasional

Tombol pemesanan menyusun permintaan dan membukanya di WhatsApp. Situs ini tidak memproses pembayaran atau menyimpan formulir di server. Pastikan ketentuan FUP, PPN, pemasangan gratis, router, cakupan, dan biaya akhir telah dikonfirmasi sebelum publikasi.

Pembatasan domain berjalan di browser dan bukan kontrol keamanan. Kode frontend tetap bisa dilihat pengunjung. Website tidak memblokir klik kanan, pemilihan teks, atau shortcut DevTools karena tindakan itu tidak melindungi source code dan mengganggu aksesibilitas.
## Halaman terpisah dan kalkulator

Navigasi menggunakan halaman hash: #/beranda, #/paket, #/kalkulator, #/cakupan, dan #/faq. Tiap layar berada di folder src/pages; komponen UI terpisah di src/components.

Kalkulator memakai batas jumlah perangkat dari flyer: 1–4 perangkat direkomendasikan HOME 10 (10 Mbps), 5 perangkat HOME 20 (20 Mbps), 6–7 perangkat HOME 30 (30 Mbps), dan 8–10 perangkat HOME 40 (40 Mbps). Di atas 10 perangkat diarahkan untuk konsultasi. Hitungan ini mengikuti batas perangkat flyer, bukan jaminan kecepatan aktual.