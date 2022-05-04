import Head from "next/head";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import Bar from "../components/BarChart";
import { useState } from "react";
import {
  ChartContainer,
  IconWrapper,
} from "../components/styles/Container";
import { Icon } from "../components/styles/Icon";
import { BiBarChartAlt2, BiDoughnutChart } from "react-icons/bi";

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

  return (
    <div>
      <Head>
        <title>Budget | Statistics</title>
      </Head>
      <h1>Statistics</h1>

      <ChartContainer>
        <LineChart />
      </ChartContainer>

      <IconWrapper>
        <Icon onClick={showDonutChart} color={isShowDonut ? "black" : "gray"}>
          <BiDoughnutChart />
        </Icon>
        <Icon onClick={showBarChart} color={isShowBar ? "black" : "gray"}>
          <BiBarChartAlt2 />
        </Icon>
      </IconWrapper>

      
        <ChartContainer className={isShowDonut ? "show" : "hide"}>
          <DoughnutChart />
        </ChartContainer>

        <ChartContainer className={isShowBar ? "show" : "hide"}>
          <Bar />
        </ChartContainer>
     
    </div>
  );
}
