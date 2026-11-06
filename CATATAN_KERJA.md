# Catatan Kerja Proyek

Catatan ini merangkum arahan pengguna untuk perubahan feed video. Ikuti kebutuhan ini saat melanjutkan pekerjaan.

## Perilaku feed video

- Saat video aktif diputar, siapkan video berikutnya secara bertahap: video urutan ke-2 sampai ke-4 relatif terhadap video aktif.
- Lepaskan lima video sebelumnya dari pemutar/buffer agar penggunaan memori tidak terus menumpuk. Jangan hanya menjeda videonya.
- Poster jangan diunduh semua sekaligus. Muat poster saat video terkait mendekati atau masuk ke area tampilan.
- Jika sumber video dilepas, simpan URL-nya agar video dapat dimuat kembali saat pengguna kembali ke video tersebut.

## Pengaturan nomor video

- Sediakan tombol di halaman agar pengguna bisa menampilkan atau menyembunyikan nomor urutan seperti `1/84`.
- Simpan pilihan pengguna supaya tetap berlaku setelah halaman dimuat ulang.
- Jangan mengunci tampilan nomor hanya lewat CSS tanpa menyediakan kontrol untuk pengguna.

## Status terakhir

- Pemuatan poster sudah diubah agar dimulai saat video masuk ke area tampilan.
- Pengelolaan sumber video aktif dan preload bertahap sudah ditambahkan ke `script.js`.
- Tombol pengaturan nomor video masih perlu dibuat. Saat ini nomor disembunyikan lewat CSS.
- Saat melanjutkan, cocokkan perilaku pelepasan video sebelumnya dengan arahan di atas: lima video sebelumnya dilepas dari pemutar/buffer.
## Struktur dan cara kerja website

- `index.html` adalah halaman utama. HTML-nya berisi daftar koleksi video dalam elemen `<details>`, judul koleksi sebagai heading sebelumnya, info kredit sesudah video, pemutar musik, layar loading/login, dan layar masuk sebagai Guest. Beberapa aturan loading/gate juga ditulis dalam `<style>` di file ini.
- `script.js` menjalankan perilaku utama halaman: menyinkronkan volume video, mengatur loading dan login gate, lalu membaca koleksi `<details>` dan membangun feed `.shorts-feed` secara dinamis. Feed mengacak urutan video, mengambil judul/kredit dari HTML asal, mengatur autoplay/pause saat scroll, seek bar, volume, aksi video, serta pemuatan poster dan sumber video. Setelah feed dibangun, pembungkus `<details>` asli dilepas.
- `style.css` dipakai bersama oleh beberapa halaman. Bagian awal mengatur reset, teks, gambar, tombol, musik, dan elemen umum; bagian tengah mengatur tema dan halaman sosial; bagian `.video-page` dan `.shorts-*` mengatur feed video layar penuh, sidebar, kontrol, serta tampilan responsif. Periksa aturan umum dan aturan khusus `.video-page` sebelum mengubah tampilan agar halaman lain tidak ikut berubah.
- `firebase-config.js` menginisialisasi Firebase. `firebase-auth.js` menangani login Google, persistensi sesi, status login, avatar, serta membuka halaman setelah autentikasi.
- `index2.html` adalah halaman profil dan `index3.html` adalah halaman sosial/kotak saran. `form.html`, `latihan.html`, `latihan/latihan.html`, `index-redesign.html`, dan `web class/X-TKJ website.html` adalah halaman terpisah; jangan menganggap semuanya bagian dari feed utama.
- Path video, poster, musik, dan gambar di HTML relatif terhadap lokasi file halaman. Pertahankan nama/path aset kecuali memang memindahkan aset dan memperbarui semua referensinya.
- Proyek ini memakai HTML, CSS, dan JavaScript biasa dengan aset lokal; tidak terlihat memakai framework atau proses build. Perubahan perilaku feed biasanya berada di `script.js`, sedangkan tampilan feed berada di aturan `.shorts-*`/`.video-page` dalam `style.css`.

### Alur data feed utama

`index.html` (koleksi video sumber) → `script.js` (ekstrak koleksi dan membentuk feed) → `.shorts-feed` (ditata oleh `style.css`). URL sumber video dan poster perlu tetap tersedia di data elemen meski atribut pemuatan dilepas sementara, agar bisa dimuat ulang ketika diperlukan.