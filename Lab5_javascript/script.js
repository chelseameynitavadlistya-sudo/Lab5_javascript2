// script.js
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
alert("Halo, " + namaPengguna + "!");
document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
alert("Nama belum diisi.");
}
// Membuat fungsi operasi dasar seperti pada Latihan 3[cite: 2]
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}

// Menerima dua nilai dari prompt dan mengonversinya menjadi number
let nilai1 = Number(prompt("Masukkan bilangan pertama:"));
let nilai2 = Number(prompt("Masukkan bilangan kedua:"));

// Memanggil fungsi dengan nilai dari prompt
operasiDasar(nilai1, nilai2);

operasiDasar(9, 4);
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
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
}

function ubahWarnaLatar(warna) {
document.body.style.backgroundColor = warna;
}
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

document.getElementById("formNilai").addEventListener("submit", function(event) {
    event.preventDefault();

    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    const error = document.getElementById("error");
    const hasil = document.getElementById("hasil");

    error.textContent = "";
    hasil.style.display = "none";

    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        error.textContent = "Error: Semua nilai harus berada pada rentang 0–100!";
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = tentukanStatus(akhir);

    hasil.innerHTML = `
        <h3>Hasil Perhitungan</h3>
        Nilai Tugas: ${tugas}<br>
        Nilai UTS: ${uts}<br>
        Nilai UAS: ${uas}<br>
        <hr>
        Nilai Akhir: <strong>${akhir.toFixed(2)}</strong><br>
        Predikat: <strong>${predikat}</strong><br>
        Status: <strong>${status}</strong>
    `;

    hasil.style.display = "block";
});
