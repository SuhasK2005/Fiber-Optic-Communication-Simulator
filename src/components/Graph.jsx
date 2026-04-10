import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const Graph = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "LED Signal",
        data: data.ledData,
        borderColor: "#f59e0b",
        backgroundColor: "#f59e0b",
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
      {
        label: "Laser Signal",
        data: data.laserData,
        borderColor: "#10b981",
        backgroundColor: "#10b981",
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#f8fafc",
          font: {
            family: "-apple-system, sans-serif",
            size: 13,
          },
        },
      },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#f8fafc",
        bodyColor: "#e2e8f0",
        borderColor: "#475569",
        borderWidth: 1,
        padding: 10,
        boxPadding: 4,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Distance (km)",
          color: "#94a3b8",
          font: {
            size: 14,
            weight: 500,
          },
        },
        ticks: {
          color: "#94a3b8",
        },
        grid: {
          color: "#334155",
        },
      },
      y: {
        title: {
          display: true,
          text: "Signal Power (mW)",
          color: "#94a3b8",
          font: {
            size: 14,
            weight: 500,
          },
        },
        ticks: {
          color: "#94a3b8",
        },
        grid: {
          color: "#334155",
        },
        min: 0,
      },
    },
    animation: {
      duration: 400,
      easing: "easeOutQuart",
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Graph;
