import Head from "next/head";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import Bar from "../components/BarChart";
import { useEffect, useState } from "react";
import {
  ChartContainer,
  IconWrapper,
  DatepickerContainer,
} from "../components/styles/Container";
import { Icon } from "../components/styles/Icon";
import { BiBarChartAlt2, BiDoughnutChart } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Statistics() {
  const [isShowDonut, setIsShowDonut] = useState(true);
  const [isShowBar, setIsShowBar] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [monthlyStats, setMonthlyStats] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const today = new Date();
  const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const [startDate, setStartDate] = useState(new Date(lastMonth));
  const [endDate, setEndDate] = useState(new Date(nextMonth));

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const labels = months.slice(startDate.getMonth(), endDate.getMonth() + 1);

  const showDonutChart = () => {
    setIsShowDonut(true);
    setIsShowBar(false);
  };

  const showBarChart = () => {
    setIsShowBar(true);
    setIsShowDonut(false);
  };

  const fetchTransactions = async () => {
    await fetch("/api/transaction")
      .then((res) => res.json())
      .then(({ transactions }) => {
        setData(transactions);
        const monthlySum: number[] = [];
        for (let i = 0; i < 12; i++) {
          let total = 0;
          for (let j = 0; j < transactions.length; j++) {
            if (transactions[j].date.split("/")[1] == i + 1) {
              total += transactions[j].amount;
            }
          }
          monthlySum.push(total);
        }
        setMonthlyStats(monthlySum);
        getCategories();

        setCategories(categoryList);
        getCategorySum();
        setCategorySum(categorySumList);
      });
  };

  const categoryList: string[] = [];
  const categorySumList: number[] = [];
  const [categorySum, setCategorySum] = useState<number[]>([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const getCategories = () => {
    for (let i = 0; i < data.length; i++) {
      if (
        !categories.includes(data[i].category) &&
        data[i].transactionType == "expense"
      ) {
        console.log(data[0]);
        categoryList.push(data[i].category);
      }
    }
  };

  const getCategorySum = () => {
    for (let i = 0; i < categoryList.length; i++) {
      let total = 0;
      for (let j = 0; j < data.length; j++) {
        if (data[j].category == categoryList[i]) {
          total += data[j].amount;
        }
      }
      categorySumList.push(total);
    }
  };

  return (
    <div>
      <Head>
        <title>Budget | Statistics</title>
      </Head>

      <DatepickerContainer>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          className="DatePickerInput"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          className="DatePickerInput"
        />
      </DatepickerContainer>

      <ChartContainer>
        <LineChart labels={labels} stats={monthlyStats} />
      </ChartContainer>

      <IconWrapper>
        <Icon onClick={showDonutChart} color={isShowDonut ? "black" : "gray"}>
          <BiDoughnutChart />
        </Icon>
        <Icon onClick={showBarChart} color={isShowBar ? "black" : "gray"}>
          <BiBarChartAlt2 />
        </Icon>
      </IconWrapper>

      <ChartContainer>
        {isShowDonut && (
          <DoughnutChart categories={categories} categorySum={categorySum} />
        )}
        {isShowBar && <Bar categories={categories} categorySum={categorySum} />}
      </ChartContainer>
    </div>
  );
}
