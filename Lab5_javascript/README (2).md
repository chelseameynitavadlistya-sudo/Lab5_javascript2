# Praktikum JavaScript – Lab 5

Proyek praktikum pengenalan JavaScript untuk web. Proyek ini berisi satu halaman HTML (`index.html`) dan satu berkas skrip (`script.js`) yang mencakup output dasar, input pengguna, operator aritmetika, percabangan, manipulasi DOM, event handling, hingga validasi form.

---

## Daftar Isi

1. [Struktur Proyek](#struktur-proyek)
2. [Prasyarat](#prasyarat)
3. [Cara Menjalankan](#cara-menjalankan)
4. [Langkah Praktikum](#langkah-praktikum)
5. [Ringkasan Fungsi](#ringkasan-fungsi)
6. [Catatan dan Saran Perbaikan](#catatan-dan-saran-perbaikan)

---

## Struktur Proyek

```
Lab5_javascript/
├── .vscode/
│   └── settings.json    # Konfigurasi Live Server (port 5501)
├── index.html           # Halaman utama: elemen UI, form, dan CSS
├── script.js            # Seluruh logika JavaScript praktikum
└── README.md            # Dokumentasi proyek (berkas ini)
```

| Berkas | Fungsi |
| --- | --- |
| `index.html` | Menampung elemen antarmuka (teks, input, tombol, checkbox menu, form kalkulator nilai) dan gaya CSS untuk kalkulator. Memuat `script.js` di akhir `<body>`. |
| `script.js` | Berisi semua kode JavaScript: output, prompt, fungsi, percabangan, DOM, event listener, dan validasi form. |
| `.vscode/settings.json` | Mengatur ekstensi Live Server agar berjalan di port `5501`. |

---

## Prasyarat

- Peramban modern (Chrome, Firefox, Edge, dsb.).
- Visual Studio Code (disarankan).
- Ekstensi **Live Server** di VS Code (opsional, tetapi memudahkan).

---

## Cara Menjalankan

**Opsi 1 – Live Server (disarankan)**

1. Buka folder `Lab5_javascript` di VS Code.
2. Klik kanan `index.html`, lalu pilih **Open with Live Server**.
3. Halaman terbuka otomatis di `http://127.0.0.1:5501/index.html`.

**Opsi 2 – Langsung dari peramban**

1. Buka folder proyek, lalu klik dua kali `index.html`.
2. Halaman akan terbuka di peramban bawaan.

> **Penting:** begitu halaman dimuat, beberapa jendela `prompt` dan `alert` akan muncul berurutan (lihat Langkah 2–5). Isi satu per satu hingga selesai. Buka **Console** peramban (`F12` → tab *Console*) untuk melihat hasil `console.log`.

---

## Langkah Praktikum

### Langkah 1 – Menampilkan Output (Hello World)

**Tujuan:** memahami tiga cara menampilkan output di JavaScript.

```js
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");
```

- `document.getElementById("pesan")` mengambil elemen `<p id="pesan">` dari HTML.
- `.textContent` mengganti isi teks elemen tersebut dari "Konten awal." menjadi "Hello World".
- `console.log()` menampilkan teks di Console peramban.

### Langkah 2 – Input Pengguna dengan `prompt` dan `alert`

**Tujuan:** menerima input dari pengguna dan memberi respons.

```js
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}
```

- `prompt()` menampilkan kotak dialog input dan mengembalikan teks yang diketik (atau `null` jika dibatalkan).
- Kondisi `namaPengguna && namaPengguna.trim() !== ""` memastikan nama tidak kosong dan bukan hanya spasi.
- Jika valid, muncul sapaan dan teks pada halaman diperbarui. Jika tidak, muncul pesan "Nama belum diisi."

### Langkah 3 – Fungsi dan Operasi Aritmetika Dasar

**Tujuan:** membuat fungsi, memakai operator aritmetika, dan mengonversi tipe data.

```js
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}

let nilai1 = Number(prompt("Masukkan bilangan pertama:"));
let nilai2 = Number(prompt("Masukkan bilangan kedua:"));
operasiDasar(nilai1, nilai2);
operasiDasar(9, 4);
```

- Fungsi `operasiDasar` menerima dua parameter dan mencetak hasil penjumlahan, pengurangan, perkalian, pembagian, serta modulus.
- Operator ternary `b !== 0 ? a / b : "..."` mencegah pembagian dengan nol.
- `prompt()` selalu mengembalikan string, maka dibungkus `Number()` agar menjadi angka.
- Fungsi dipanggil dua kali: dengan input pengguna, dan dengan nilai tetap `9` dan `4` (hasil: 13, 5, 36, 2.25, 1).

### Langkah 4 – Percabangan `if...else` (Validasi Nilai Lulus)

**Tujuan:** memakai percabangan bersyarat dan validasi input.

```js
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (inputNilai === null || inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}
```

| Kondisi | Hasil |
| --- | --- |
| Kosong, dibatalkan, bukan angka, atau di luar 0–100 | "Input nilai tidak valid." |
| Nilai ≥ 60 | "Lulus" |
| Nilai < 60 | "Belum lulus" |

### Langkah 5 – Percabangan `switch`

**Tujuan:** memilih aksi berdasarkan beberapa kemungkinan nilai.

```js
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
  case "1": alert("Bilangan satu"); break;
  case "2": alert("Bilangan dua"); break;
  case "3": alert("Bilangan tiga"); break;
  case "4": alert("Bilangan empat"); break;
  case "5": alert("Bilangan lima"); break;
  default: alert("Pilihan tidak tersedia");
}
```

- Input dibandingkan dengan tiap `case` (bertipe string karena berasal dari `prompt`).
- `break` menghentikan eksekusi agar tidak "jatuh" ke case berikutnya.
- `default` dijalankan jika input di luar 1–5.

### Langkah 6 – Manipulasi DOM: Mengubah Warna Latar

**Tujuan:** mengubah gaya elemen melalui JavaScript dan event `onclick`.

HTML:

```html
<button type="button" onclick="ubahWarnaLatar('lightgreen')">Latar Hijau</button>
<button type="button" onclick="ubahWarnaLatar('white')">Latar Putih</button>
<button type="button" onclick="ubahWarnaLatar('lightyellow')">Latar Kuning</button>
```

JavaScript:

```js
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}
```

- Atribut `onclick` memanggil fungsi saat tombol diklik, dengan nama warna sebagai argumen.
- `document.body.style.backgroundColor` mengganti warna latar halaman.

### Langkah 7 – Memeriksa Bilangan Genap atau Ganjil

**Tujuan:** membaca nilai dari input HTML dan menampilkan hasil ke halaman.

HTML:

```html
<label for="bilangan">Masukkan bilangan bulat:</label>
<input type="number" id="bilangan" step="1">
<button type="button" onclick="cekBilangan()">Periksa</button>
<p id="hasilBilangan"></p>
```

JavaScript:

```js
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}
```

- `Number.isInteger()` memastikan input berupa bilangan bulat (desimal ditolak).
- `angka % 2 === 0` menentukan genap; selain itu ganjil.

### Langkah 8 – Event Listener: Menghitung Total Menu Makanan

**Tujuan:** memakai `querySelectorAll`, `forEach`, dan `addEventListener` untuk pembaruan otomatis.

HTML (checkbox dengan `class="menu"` dan harga pada atribut `value`):

| Menu | Harga |
| --- | --- |
| Ayam Goreng | Rp5.000 |
| Tempe | Rp500 |
| Telur Dadar | Rp2.500 |
| Es Teh *(menu tambahan)* | Rp3.000 |
| Mie Goreng *(menu tambahan)* | Rp6.000 |

JavaScript:

```js
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}
```

- `querySelectorAll(".menu")` mengambil semua checkbox menu.
- Setiap checkbox dipasangi listener `change`, sehingga total dihitung ulang saat dicentang atau dibatalkan.
- `toLocaleString("id-ID")` memformat angka dengan pemisah ribuan titik (misal `8.500`).
- Penambahan minimal dua menu baru (Es Teh dan Mie Goreng) cukup dengan menambah `<input class="menu" value="...">`; JavaScript tidak perlu diubah.

### Langkah 9 – Kalkulator Nilai Mahasiswa (Form dan Validasi)

**Tujuan:** menggabungkan form, event `submit`, fungsi, percabangan, dan template literal.

**Rumus nilai akhir:**

```
Nilai Akhir = (Tugas × 30%) + (UTS × 30%) + (UAS × 40%)
```

**Tabel predikat dan status:**

| Nilai Akhir | Predikat | Status |
| --- | --- | --- |
| ≥ 85 | A | Lulus |
| 75 – 84,99 | B | Lulus |
| 60 – 74,99 | C | Lulus |
| 50 – 59,99 | D | Belum Lulus |
| < 50 | E | Belum Lulus |

**Fungsi pendukung:**

```js
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function tentukanStatus(nilai) {
  return nilai >= 60 ? "Lulus" : "Belum Lulus";
}
```

**Penanganan form:**

```js
document.getElementById("formNilai").addEventListener("submit", function (event) {
  event.preventDefault();   // mencegah halaman dimuat ulang
  // 1. ambil nilai tugas, uts, uas dan ubah ke Number
  // 2. reset pesan error dan sembunyikan hasil
  // 3. validasi: semua nilai harus 0–100, jika tidak tampilkan error lalu return
  // 4. hitung nilai akhir, predikat, dan status
  // 5. tampilkan hasil lewat innerHTML (template literal) dan munculkan kotak hasil
});
```

- `event.preventDefault()` menghentikan perilaku bawaan form (reload halaman).
- Jika ada nilai di luar 0–100, tampil pesan: *"Error: Semua nilai harus berada pada rentang 0–100!"*
- Hasil ditampilkan dengan `innerHTML` dan template literal (`` `...${variabel}...` ``), nilai akhir diformat dua desimal dengan `toFixed(2)`.

**Contoh uji:**

| Tugas | UTS | UAS | Nilai Akhir | Predikat | Status |
| --- | --- | --- | --- | --- | --- |
| 80 | 70 | 90 | 81,00 | B | Lulus |
| 100 | 100 | 100 | 100,00 | A | Lulus |
| 40 | 50 | 55 | 49,00 | E | Belum Lulus |
| 110 | 80 | 80 | – | – | Error rentang nilai |

---

## Ringkasan Fungsi

| Fungsi / Blok | Berkas | Kegunaan |
| --- | --- | --- |
| `operasiDasar(a, b)` | `script.js` | Mencetak hasil operasi aritmetika dasar ke Console |
| `ubahWarnaLatar(warna)` | `script.js` | Mengubah warna latar halaman |
| `cekBilangan()` | `script.js` | Menentukan bilangan genap atau ganjil |
| `hitungTotal()` | `script.js` | Menjumlahkan harga menu yang dicentang |
| `hitungNilaiAkhir(t, u, a)` | `script.js` | Menghitung nilai akhir berbobot |
| `tentukanPredikat(nilai)` | `script.js` | Mengonversi nilai menjadi predikat A–E |
| `tentukanStatus(nilai)` | `script.js` | Menentukan Lulus atau Belum Lulus |
| Listener `submit` pada `#formNilai` | `script.js` | Validasi dan menampilkan hasil kalkulator |

---

## Catatan dan Saran Perbaikan

Beberapa hal yang bisa dirapikan jika proyek dikembangkan lebih lanjut:

1. **Tag `<meta>` dan `<title>` ganda.** Pada `index.html`, setelah elemen `Total`, terdapat `<meta>`, `<title>`, `<style>`, dan `</head><body>` kedua. Struktur ini tidak valid; sebaiknya `<style>` dipindah ke dalam `<head>` utama dan sisa tag duplikat dihapus. Peramban umumnya masih menampilkan halaman dengan benar.
2. **Modulus dengan pembagi nol.** Pada `operasiDasar`, `a % b` dengan `b = 0` menghasilkan `NaN`. Pembagian sudah dijaga, tetapi modulus belum.
3. **Prompt muncul saat halaman dimuat.** Karena kode `prompt` berada di level atas `script.js`, semua dialog muncul berurutan setiap kali halaman dibuka. Untuk pengalaman yang lebih baik, bungkus tiap latihan dalam fungsi dan panggil lewat tombol.
4. **Komentar sisa penyalinan.** Baris komentar `// ... Latihan 3[cite: 2]` mengandung penanda `[cite: 2]` yang sebaiknya dihapus.
5. **Gaya CSS global.** Aturan `label`, `input`, dan `button` pada CSS kalkulator berlaku untuk seluruh halaman, sehingga ikut memengaruhi checkbox dan tombol latar. Gunakan selektor yang lebih spesifik (misal `.container label`) agar tidak saling memengaruhi.
6. **Event handler.** Atribut `onclick` pada HTML bisa diganti `addEventListener` di JavaScript agar HTML dan logika lebih terpisah.

---

## Konsep yang Dipelajari

- Output: `console.log`, `alert`, `textContent`, `innerHTML`
- Input: `prompt`, nilai elemen `<input>`
- Tipe data dan konversi: `Number()`, `Number.isNaN()`, `Number.isInteger()`
- Operator: aritmetika, perbandingan, logika, ternary
- Percabangan: `if...else if...else`, `switch`
- Fungsi: deklarasi, parameter, `return`
- DOM: `getElementById`, `querySelectorAll`, `style`
- Event: `onclick`, `change`, `submit`, `preventDefault`
- Template literal dan format angka (`toFixed`, `toLocaleString`)
