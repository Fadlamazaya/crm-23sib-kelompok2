import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Data summary cards
  const stats = [
    {
      label: "Pendapatan Hari Ini",
      value: "$53,000",
      percent: "+55%",
      color: "green",
    },
    {
      label: "Kunjungan Bulanan",
      value: "1.024",
      percent: "+8%",
      color: "blue",
    },
    {
      label: "Layanan Terlaris",
      value: "Vaksinasi Rabies",
      percent: "",
      color: "purple",
    },
    {
      label: "Dokter Terbaik",
      value: "drh. Lestari",
      percent: "",
      color: "indigo",
    },
  ];

  // Grafik Kunjungan Bulanan
  const visitsData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
      "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
    ],
    datasets: [
      {
        label: "Jumlah Kunjungan",
        data: [400, 450, 480, 500, 520, 600, 580, 630, 700, 750, 770, 820],
        backgroundColor: "rgba(34,197,94,0.6)", // green-500
      },
    ],
  };

  const visitsOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Kunjungan Bulanan Pasien" },
    },
  };

  // Grafik Performa Dokter (Bar Chart)
  const doctorPerformanceData = {
    labels: [
      "drh. Lestari", "drh. Budi", "drh. Aminah", "drh. Riko", "drh. Santi",
    ],
    datasets: [
      {
        label: "Jumlah Penanganan",
        data: [120, 98, 110, 85, 77],
        backgroundColor: "rgba(96,165,250,0.7)", // blue-400
      },
    ],
  };

  const doctorPerformanceOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Performa Dokter (Jumlah Penanganan)" },
    },
  };

  return (
    <div className="p-6 space-y-8">
      {/* Statistik utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, value, percent, color }) => (
          <div key={label} className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">{label}</p>
            <h2 className={`text-2xl font-bold text-${color}-600 flex items-center gap-2`}>
              {value}
              {percent && (
                <span className={`text-xs font-semibold text-${color}-500`}>
                  {percent}
                </span>
              )}
            </h2>
          </div>
        ))}
      </div>

      {/* Grafik Kunjungan Bulanan */}
      <div className="bg-white rounded-xl shadow p-6">
        <Bar options={visitsOptions} data={visitsData} />
      </div>

      {/* Grafik Performa Dokter */}
      <div className="bg-white rounded-xl shadow p-6">
        <Bar options={doctorPerformanceOptions} data={doctorPerformanceData} />
      </div>
    </div>
  );
};

export default Dashboard;
