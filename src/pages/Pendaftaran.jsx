import React, { useState, useEffect } from "react";
import AntrianSekarang from "./AntrianSekarang";

// Data dropdown
const daftarDokter = ["Drh. Andi", "Drh. Rina", "Drh. Susi"];
const daftarJenisHewan = ["Anjing", "Kucing", "Kelinci"];
const daftarRas = {
  Anjing: ["Golden Retriever", "Pomeranian", "Beagle", "Kintamani"],
  Kucing: ["Persia", "Anggora", "Kampung", "Bengal"],
  Kelinci: ["Lop", "Anggora", "Netherland Dwarf"]
};
const daftarJam = ["08:00 - 10:00", "10:00 - 12:00", "13:00 - 15:00", "15:00 - 17:00"];
const estimasiHarga = {
  Anjing: 150000,
  Kucing: 100000,
  Kelinci: 80000
};

export default function Pendaftaran() {
  const [riwayatKunjungan, setRiwayatKunjungan] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    dokter: "",
    jenisHewan: "",
    ras: "",
    tanggal: "",
    jadwal: "",
    keluhan: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("riwayatKunjungan");
    if (data) {
      setRiwayatKunjungan(JSON.parse(data));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset ras jika jenis hewan berubah
    if (name === "jenisHewan") {
      setFormData((prev) => ({ ...prev, [name]: value, ras: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const getNextQueueNumber = (appointments, tanggal) => {
    const sameDate = appointments.filter((a) => a.tanggal === tanggal);
    return sameDate.length + 1;
  };

  const handleSubmit = () => {
    // Cek semua field wajib diisi
    const lengkap = Object.values(formData).every((val) => val !== "");
    if (!lengkap) return alert("Semua field wajib diisi!");

    const dataSebelumnya = JSON.parse(localStorage.getItem("riwayatKunjungan")) || [];
    const nomorAntrian = getNextQueueNumber(dataSebelumnya, formData.tanggal);

    const dataBaru = [...dataSebelumnya, { ...formData, nomorAntrian }];
    localStorage.setItem("riwayatKunjungan", JSON.stringify(dataBaru));
    setRiwayatKunjungan(dataBaru);

    alert(`Pendaftaran berhasil! Nomor antrian Anda untuk ${formData.tanggal}: ${nomorAntrian}`);

    setFormData({
      nama: "",
      email: "",
      dokter: "",
      jenisHewan: "",
      ras: "",
      tanggal: "",
      jadwal: "",
      keluhan: "",
    });
  };

  const estimasi = formData.jenisHewan ? estimasiHarga[formData.jenisHewan] : null;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Form Pendaftaran Kunjungan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input standar */}
        {[["Nama", "nama"], ["Email", "email"], ["Tanggal Daftar", "tanggal", "date"]].map(([label, name, type = "text"]) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        ))}

        {/* Jenis Hewan Dropdown */}
        <div>
          <label className="block font-medium mb-1">Jenis Hewan</label>
          <select
            name="jenisHewan"
            value={formData.jenisHewan}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">-- Pilih Jenis Hewan --</option>
            {daftarJenisHewan.map((j, i) => (
              <option key={i} value={j}>{j}</option>
            ))}
          </select>
        </div>

        {/* Ras Dropdown */}
        <div>
          <label className="block font-medium mb-1">Ras</label>
          <select
            name="ras"
            value={formData.ras}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-indigo-400"
            disabled={!formData.jenisHewan}
          >
            <option value="">-- Pilih Ras --</option>
            {formData.jenisHewan &&
              daftarRas[formData.jenisHewan].map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
          </select>
        </div>

        {/* Dokter Dropdown */}
        <div>
          <label className="block font-medium mb-1">Pilih Dokter</label>
          <select
            name="dokter"
            value={formData.dokter}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">-- Pilih Dokter --</option>
            {daftarDokter.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Jam Jadwal */}
        <div>
          <label className="block font-medium mb-1">Pilih Jam</label>
          <select
            name="jadwal"
            value={formData.jadwal}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">-- Pilih Jam --</option>
            {daftarJam.map((jam, i) => (
              <option key={i} value={jam}>{jam}</option>
            ))}
          </select>
        </div>

        {/* Keluhan */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Keluhan</label>
          <textarea
            name="keluhan"
            value={formData.keluhan}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Quotation / Estimasi Biaya */}
        {estimasi && (
          <div className="md:col-span-2 mt-2 bg-yellow-100 p-4 rounded border border-yellow-300">
            <p className="font-medium text-yellow-800">
              💡 Estimasi Biaya Pemeriksaan untuk {formData.jenisHewan}: <span className="font-bold">Rp {estimasi.toLocaleString()}</span>
            </p>
          </div>
        )}
      </div>

      {/* Tombol Submit */}
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Daftar
      </button>

      {/* Antrian Saat Ini */}
      <div className="mt-10">
        <AntrianSekarang />
      </div>
    </div>
  );
}
