import Head from "next/head";
import LineChart from "../components/lineChart";
import DoughnutChart from "../components/doughnutChart";
import Bar from "../components/barChart";
import { useState } from "react";
import {
  MainCard,
  SmallCard,
  Wrapper,
  IconWrapper,
} from "../components/styles/Container";
import { Icon } from "../components/styles/Icon";
import { BiBarChartAlt2, BiDoughnutChart } from 'react-icons/bi';

export default function Statistics() {
  const [isShowDonut, setIsShowDonut] = useState(true);
  const [isShowBar, setIsShowBar] = useState(false);

  const showDonutChart = () => {
    setIsShowDonut(true);
    setIsShowBar(false);
  }

  const showBarChart = () => {
    setIsShowBar(true);
    setIsShowDonut(false);
  }


  return (
    <div>
      <Head>
        <title>Budget | Statistics</title>
      </Head>
      <h1>Statistics</h1>

      <MainCard>
        <LineChart />
      </MainCard>

      <IconWrapper>
        <Icon onClick={showDonutChart} color={isShowDonut ? "black": "gray"}><BiDoughnutChart /></Icon>
        <Icon onClick={showBarChart} color={isShowBar ? "black": "gray"}><BiBarChartAlt2 /></Icon>
      </IconWrapper>

        <Wrapper>
          <MainCard className={isShowDonut ? "show" : "hide"}>
            <DoughnutChart />
          </MainCard>

          <MainCard className={isShowBar ? "show" : "hide"}>
            <Bar />
          </MainCard>
        </Wrapper>
    </div>
  );
}
