import Head from "next/head";
import AddTransaction from "components/Transaction/AddTransaction";
import axios from "axios";
import { useEffect, useState } from "react";
import { AccountTransaction } from "utils/type";
import TransactionHero from "../components/Transaction/TransactionHero";
import TransactionItem from "../components/Transaction/TransactionItem";



export default function Home() {
  const [transactionData, setTransactionData] = useState<AccountTransaction[]>(
    []
  );
  const [monthvalue, setMonthValue] = useState<Date | null>(new Date());
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [incomeTotal, setincomeTotal] = useState(0);
  const [updateData, setUpdateData] = useState("");

  const fetchDataFromAPI = () => {
    axios
      .get("/api/transaction/")
      .then((res) => {
        const data = res.data.transactions;
        const monthSelect = data.filter((month) => month.date === monthvalue);
        console.log(monthSelect);
        setTransactionData(data);
        const expenseType = data.filter(
          (name: any) => name.transactionType === "Expense"
        );
        const incomeType = data.filter(
          (name: any) => name.transactionType === "Income"
        );
        if (expenseType.length > 0 || incomeType.length > 0) {
          const expenseArray = expenseType.map((n: array[number]) => n.amount);
          const expenseTotal = expenseArray.reduce(
            (sum: number, tran: number) => sum + tran
          );
          const incomeArray = incomeType.map((n: array[number]) => n.amount);
          const incomeTotal = incomeArray.reduce(
            (sum: number, tran: number) => sum + tran
          );
          setExpenseTotal(expenseTotal);
          setincomeTotal(incomeTotal);
        }
      })
      .catch((err) => {
        console.log(err);
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
      <TransactionHero income={incomeTotal} expenses={expenseTotal} />

      <div>date</div>
    
      <div>{transactionData.length} TRANSACTIONS</div>

      {transactionData
        .slice(0)
        .reverse()
        .map((transaction, idx) => (
          <div key={idx}>
            <TransactionItem
              transactionType={transaction.transactionType}
              title={transaction.category}
              date={transaction.date}
              amount={transaction.amount}
              secondTitle={transaction.categoryDetail}
              details={transaction.textDetails}
            />
          </div>
        ))}

      <AddTransaction setUpdateData={setUpdateData} />
    </div>
  );
}
