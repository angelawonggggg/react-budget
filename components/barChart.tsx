// https://www.chartjs.org/docs/3.0.2/getting-started/integration.html
import { Chart, ArcElement, BarElement } from "chart.js";
import { BarChart } from "../utils/type";
import { useState } from "react";

Chart.register(ArcElement, BarElement);

import { Bar } from "react-chartjs-2";

export default function BarChartComponent({ content }: BarChart) {
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
        label: "$",
        data: getCategorySum(),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 46, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 46, 64, 1)",
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
