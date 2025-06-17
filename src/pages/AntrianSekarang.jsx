import React, { useEffect, useState } from "react";

export default function AntrianSekarang() {
  const [antrian, setAntrian] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const data = JSON.parse(localStorage.getItem("riwayatKunjungan")) || [];
      setAntrian(data);
    }, 1000); // Refresh otomatis setiap 1 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-yellow-100 border rounded">
      <h2 className="text-xl font-semibold mb-2">Nomor Antrian Saat Ini</h2>
      {antrian.length > 0 ? (
        <ul className="list-disc pl-5 space-y-1">
          {antrian.map((item, idx) => (
            <li key={idx}>
              <strong>{item.nomorAntrian}.</strong> {item.nama} - {item.jenisHewan} ({item.dokter})
            </li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada antrian saat ini.</p>
      )}
    </div>
  );
}
