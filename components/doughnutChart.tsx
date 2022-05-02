// https://www.chartjs.org/docs/3.0.2/getting-started/integration.html
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart() {
  const data = {
    labels: ["Food", "Entertainment", "Transportation"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    legend: {
      display: false,
      position: "right",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
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

  return (
    <div>
      <Doughnut data={data} width={80} height={40} options={options} />
    </div>
  );
}
