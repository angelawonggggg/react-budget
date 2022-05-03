import Head from "next/head";
import { motion } from "framer-motion";
import styled from "styled-components";
import AddTransaction from "components/AddTransaction";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Budget | Home</title>
      </Head>
      <div>date</div>
      <div>0 TRANSACTIONS</div>
      <div>content</div>

      <AddTransaction />
    </div>
  );
}
