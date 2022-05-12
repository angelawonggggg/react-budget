import Head from "next/head";
import { motion } from "framer-motion";
import styled from "styled-components";
import AddTransaction from "components/AddTransaction";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [transactionData, setTransactionData] = useState<any[]>([]);
  const [amount, setAmount] = useState(0);
  const [updateData, setUpdateData] = useState("");

  const fetchDataFromAPI = () => {
    axios.get("/api/transaction/").then((data) => {
      console.log(data);
      setTransactionData(data.data.transaction);
      const amount = data.data.transaction.map((trans: any) =>
        parseInt(trans.amount)
      );
      const sum = amount.reduce((x: number, y: number) => x + y);

      setAmount(sum);
    });
  };

  useEffect(() => {
    if (transactionData) {
      fetchDataFromAPI();
    }
  }, [updateData]);

  return (
    <div>
      <Head>
        <title>Budget | Home</title>
      </Head>
      <div>date</div>
      <div>{transactionData.length} TRANSACTIONS</div>
      <div>$ {amount}</div>
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

      <AddTransaction setUpdateData={setUpdateData} />
    </div>
  );
}
