// // src/pages/KunjunganHewan.jsx
// import React, { useState } from "react";

// export default function KunjunganHewan() {
//   const [kunjunganList, setKunjunganList] = useState([
//     {
//       id: 1,
//       namaHewan: "Kitty",
//       tanggal: "2025-06-10",
//       status: "Selesai",
//       riwayatLayanan: "Vaksinasi, Pemeriksaan Umum",
//       tindakan: "Diberi vaksin rabies, obat cacing",
//     },
//     {
//       id: 2,
//       namaHewan: "Bruno",
//       tanggal: "2025-06-09",
//       status: "Dalam Proses",
//       riwayatLayanan: "Pemeriksaan Luka",
//       tindakan: "Pembersihan luka, pemberian antibiotik",
//     },
//   ]);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4 text-purple-700">Kunjungan Hewan</h2>
//       <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
//         <table className="min-w-full border">
//           <thead>
//             <tr className="bg-purple-100 text-purple-700">
//               <th className="px-4 py-2 border">Nama Hewan</th>
//               <th className="px-4 py-2 border">Tanggal</th>
//               <th className="px-4 py-2 border">Status</th>
//               <th className="px-4 py-2 border">Riwayat Layanan</th>
//               <th className="px-4 py-2 border">Tindakan</th>
//             </tr>
//           </thead>
//           <tbody>
//             {kunjunganList.map((kunjungan) => (
//               <tr key={kunjungan.id}>
//                 <td className="px-4 py-2 border">{kunjungan.namaHewan}</td>
//                 <td className="px-4 py-2 border">{kunjungan.tanggal}</td>
//                 <td className="px-4 py-2 border">{kunjungan.status}</td>
//                 <td className="px-4 py-2 border">{kunjungan.riwayatLayanan}</td>
//                 <td className="px-4 py-2 border">{kunjungan.tindakan}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
