// https://www.chartjs.org/docs/3.0.2/getting-started/integration.html
import { Chart, ArcElement, BarElement } from "chart.js";

Chart.register(ArcElement, BarElement);

import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const data = {
    labels: [
      "Food",
      "Entertainment",
      "Transportation",
      "Study",
      "Rent",
      "Other",
    ],
    datasets: [
      {
        data: [300, 50, 100, 50, 800, 150],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        text: "My spending",
        display: true,
        color: "#000",
        font: {
          size: 18,
        },
      },
    },
  };
  return <Bar data={data} width={80} height={40} options={options} />;
}
