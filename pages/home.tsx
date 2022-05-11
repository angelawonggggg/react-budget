import Head from "next/head";
import { motion } from "framer-motion";
import styled from "styled-components";
import AddTransaction from "components/AddTransaction";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [transactionData, setTransactionData] = useState(false);
  const fetchDataFromAPI = () => {
    axios.get("/api/transaction/").then((data) => {
      console.log(data.data.transaction);
      setTransactionData(data.data.transaction);
    });
  };
  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <div>
      <Head>
        <title>Budget | Home</title>
      </Head>
      <div>date</div>
      <div>0 TRANSACTIONS</div>
      {transactionData && (
        <div>
          <div>{transactionData[0].accountType}</div>
          <div>$ {transactionData[0].amount}</div>
          <div>{transactionData[0].category}</div>
          <div>{transactionData[0].categoryDetail}</div>
          <div>{transactionData[0].date}</div>
          <div>{transactionData[0].textDetails}</div>
        </div>
      )}

      <AddTransaction />
    </div>
  );
}
