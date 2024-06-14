"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: ["Bank 1", "Bank2", "Bank 3"],
    datasets: [
      {
        label: "MBanks",
        data: [300, 50, 100],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <Doughnut
      data={data}
      options={{ cutout: "60%", plugins: { legend: { display: false } } }}
    />
  );
};

export default DoughnutChart;
