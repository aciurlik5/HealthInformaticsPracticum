// ./components/LineChart.js

import React from "react";
import { Line } from "react-chartjs-2";
import {LinearScale, CategoryScale, Chart, PointElement, LineElement } from "chart.js";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);


export default function LineChart({ data, label, lineTitle }) {
  const graphData = {
    labels: label,
    datasets: [
      {
        label: lineTitle,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: data,
      },
    ],
  };

  return (
    <div>
      <Line data={graphData} />
    </div>
  );
};
