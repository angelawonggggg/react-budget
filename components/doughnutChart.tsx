// https://www.chartjs.org/docs/3.0.2/getting-started/integration.html
import { Doughnut } from "react-chartjs-2";
import { DoughnutChart } from "../utils/type";

export default function DoughnutChartComponent({
  categories,
  categorySum,
}: DoughnutChart) {
  const data = {
    labels: categories,
    datasets: [
      {
        data: categorySum,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#F39C12",
          "#00BBFF",
          "#DAF7A6",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#F39C12",
          "#00BBFF",
          "#DAF7A6",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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

  return <Doughnut data={data} width={80} height={40} options={options} />;
}
