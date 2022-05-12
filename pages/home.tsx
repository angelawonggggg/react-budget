import Head from "next/head";
import { motion } from "framer-motion";
import styled from "styled-components";
import AddTransaction from "components/AddTransaction";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [transactionData, setTransactionData] = useState<any[]>([]);

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

      {transactionData.map((transaction, idx) => (
        <div key={idx}>
          <div>{transaction.accountType}</div>
          <div>{transaction.amount}</div>
          <div>{transaction.category}</div>
          <div>{transaction.categoryDetail}</div>
          <div>{transaction.date}</div>
          <div>{transaction.textDetails}</div>
        </div>
      ))}

      <AddTransaction />
    </div>
  );
}
