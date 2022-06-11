import Head from "next/head";
import LineChart from "../components/lineChart";
import DoughnutChart from "../components/doughnutChart";
import Bar from "../components/barChart";
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
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { User } from "models/auth";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const { user } = req.session;
    if (user?.isLoggedIn === false) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
        props: {
          user: user,
        },
      };
    }
    return { props: { user } };
  },
  sessionOptions
);

export default function Statistics({ user }: { user: User }) {
  const [isShowDonut, setIsShowDonut] = useState(true);
  const [isShowBar, setIsShowBar] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [monthlyStats, setMonthlyStats] = useState<number[]>([]);

  const today = new Date();

  const lastSixMonth = new Date(today.getFullYear(), today.getMonth() - 5, 1);
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const [startDate, setStartDate] = useState(new Date(lastSixMonth));
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
      });
  };

  useEffect(() => {
    fetchTransactions();
    // console.log(data);
  }, []);

  return (
    <div>
      <Head>
        <title>Budget | Statistics</title>
      </Head>

      <DatepickerContainer>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
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
        <LineChart labels={labels} dataset={data} stats={monthlyStats} />
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
        {isShowDonut && <DoughnutChart content={data} />}
        {isShowBar && <Bar content={data} />}
      </ChartContainer>
    </div>
  );
}
