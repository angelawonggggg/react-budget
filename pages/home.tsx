import Head from "next/head";
import { motion } from "framer-motion";
import styled from "styled-components";
import AddTransaction from "components/AddTransaction";
import axios from "axios";
import { useEffect, useState } from "react";
import { AccountTransaction } from "utils/type";
import transactions from "models/transactions";

export default function Home() {
  const [transactionData, setTransactionData] = useState<AccountTransaction[]>(
    []
  );
  const [updateData, setUpdateData] = useState("");

  const fetchDataFromAPI = () => {
    axios.get("/api/transaction/").then((res) => {
      setTransactionData(res.data.transactions);
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
      <div>
        $
        {transactionData.reduce(
          (sum, tran) =>
            sum + isNaN(parseInt(tran.amount)) ? 0 : parseInt(tran.amount),
          0
        )}
      </div>
      {transactionData.map((transaction, idx) => (
        <div key={idx}>
          <ul>
            <li>{transaction.accountType}</li>
            <li>{transaction.amount}</li>
            <li>{transaction.category}</li>
            <li>{transaction.categoryDetail}</li>
            <li>{transaction.date}</li>
            <li>{transaction.textDetails}</li>
          </ul>
          <hr />
        </div>
      ))}

      <AddTransaction setUpdateData={setUpdateData} />
    </div>
  );
}
