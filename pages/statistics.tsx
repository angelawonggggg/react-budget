import Head from "next/head";
import LineChart from "../components/lineChart";
import DoughnutChart from "../components/doughnutChart";
import Bar from "../components/barChart";
import {
  MainCard,
  SmallCard,
  Wrapper,
} from "../components/styles/ContainerStyle";

export default function Statistics() {
  return (
    <div>
      <Head>
        <title>Budget | Statistics</title>
      </Head>
      <h1>Statistics</h1>
      <MainCard>
        <LineChart />
      </MainCard>

      <div>
        <Wrapper>
          <SmallCard>
            <DoughnutChart />
          </SmallCard>

          <SmallCard>
            <Bar />
          </SmallCard>
        </Wrapper>
      </div>
    </div>
  );
}
