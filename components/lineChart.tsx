import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register([
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
]);

import { LineChart } from "../utils/type";
import { Line } from "react-chartjs-2";

export default function LineChartComponent({ dataset, labels }: LineChart) {
  const getMonthlySum = () => {
    const monthlySum: number[] = [];
    for (let i = 0; i < 12; i++) {
      let total = 0;
      for (let j = 0; j < dataset.length; j++) {
        let formatMonth = new Date(dataset[j].date).getMonth();
        if (formatMonth == i && dataset[j].transactionType == "expense") {
          total += dataset[j].amount;
          monthlySum[i] = total;
        }
      }
      if (monthlySum[i] == null) {
        monthlySum[i] = 0;
      }
    }
    // console.log(monthlySum);

    return monthlySum;
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Monthly expenses",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: getMonthlySum(),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        text: "Monthly expenses",
        display: true,
        color: "#000",
        font: {
          size: 18,
        },
      },
    },
    parsing: {
      xAxisKey: "months",
      yAxisKey: "expenses $",
    },
  };

  return <Line data={data} width={100} height={100} options={options} />;
}
