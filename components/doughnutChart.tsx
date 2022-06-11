// https://www.chartjs.org/docs/3.0.2/getting-started/integration.html
import { Doughnut } from "react-chartjs-2";
import { DoughnutChart } from "../utils/type";

export default function DoughnutChartComponent({ content }: DoughnutChart) {
  const categoryList: string[] = [];
  const categorySumList: number[] = [];

  const getCategories = () => {
    for (let i = 0; i < content.length; i++) {
      if (
        !categoryList.includes(content[i].category) &&
        content[i].transactionType == "expense"
      ) {
        categoryList.push(content[i].category);
      }
    }
    return categoryList;
  };

  const getCategorySum = () => {
    for (let i = 0; i < categoryList.length; i++) {
      let total = 0;
      for (let j = 0; j < content.length; j++) {
        if (content[j].category == categoryList[i]) {
          total += content[j].amount;
        }
      }
      categorySumList.push(total);
    }
    return categorySumList;
  };

  const data = {
    labels: getCategories(),
    datasets: [
      {
        data: getCategorySum(),
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
