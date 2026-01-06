"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

type Props = {
  history: Array<{
    month: string;
    year: number;
    blood_pressure: {
      systolic: { value: number };
      diastolic: { value: number };
    };
  }>;
};

export default function BloodPressureChart({ history }: Props) {
  // Usually the XD shows a range across months (order matters)
  const labels = history.map((h) => `${h.month} ${h.year}`);
  const systolic = history.map((h) => h.blood_pressure.systolic.value);
  const diastolic = history.map((h) => h.blood_pressure.diastolic.value);

  const data = {
    labels,
    datasets: [
      { label: "Systolic", data: systolic, tension: 0.35 },
      { label: "Diastolic", data: diastolic, tension: 0.35 },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: true } },
    scales: { y: { beginAtZero: false } },
  };

  return <Line data={data} options={options} />;
}
