import Head from "next/head";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import Bar from "../components/BarChart";
import { useState } from "react";
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

  const showDonutChart = () => {
    setIsShowDonut(true);
    setIsShowBar(false);
  };

  const showBarChart = () => {
    setIsShowBar(true);
    setIsShowDonut(false);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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

  const stats = [65, 59, 80, 81, 56, 55, 40];

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
        <LineChart labels={labels} stats={stats} />
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
        {isShowDonut && <DoughnutChart />}
        {isShowBar && <Bar />}
      </ChartContainer>
    </div>
  );
}
