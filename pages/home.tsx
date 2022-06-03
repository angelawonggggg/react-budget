import Head from "next/head";
import AddTransaction from "components/Transaction/AddTransaction";
import axios from "axios";
import { useEffect, useState } from "react";
import { AccountTransaction } from "utils/type";
import TransactionHero from "../components/Transaction/TransactionHero";
import TransactionItem from "../components/Transaction/TransactionItem";
import { ItemWrapper } from "components/styles/Container";
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

export default function Home({ user }: { user: User }) {
  console.log(user.username);
  const [transactionData, setTransactionData] = useState<AccountTransaction[]>(
    []
  );
  // const [monthvalue, setMonthValue] = useState<Date | null>(new Date());
  // const [expenseTotal, setExpenseTotal] = useState(0);
  // const [incomeTotal, setIncomeTotal] = useState(0);
  const [updateData, setUpdateData] = useState("");

  const fetchDataFromAPI = () => {
    axios
      .get("/api/transaction/", {
        params: {
          username: user.username,
        },
      })
      .then((res) => {
        const data = res.data.transactions;
        // const monthSelect = data.filter((month) => month.date === monthvalue);
        // console.log(monthSelect);
        setTransactionData(data);

        // const expenseType = data.filter(
        //   (name: any) => name.transactionType === "Expense"
        // );
        // const incomeType = data.filter(
        //   (name: any) => name.transactionType === "Income"
        // );
        // if (expenseType.length || incomeType.length) {
        //   const expenseArray = expenseType.map((n : [number] => n.amount);
        //   const expenseTotal = expenseArray.reduce(
        //     (sum: number, tran: number) => sum + tran
        //   );
        //   const incomeArray = incomeType.map((n: array[number]) => n.amount);

        //   const incomeTotal = incomeArray.reduce(
        //     (sum: number, tran: number) => sum + tran
        //   );
        //   setExpenseTotal(expenseTotal);
        //   setIncomeTotal(incomeTotal);
        //}
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // if (transactionData) {
    fetchDataFromAPI();
    //}
  }, [updateData]);

  return (
    <div>
      <Head>
        <title>Budget | Home</title>
      </Head>
      {/* <TransactionHero income={incomeTotal} expenses={expenseTotal} /> */}

      {/* <div>date</div> */}

      <div>{transactionData.length} TRANSACTIONS</div>

      <ItemWrapper>
        {transactionData
          .slice(0)
          .reverse()
          .map((transaction, idx) => (
            <div key={idx}>
              <TransactionItem
                transactionType={transaction.transactionType}
                title={transaction.category}
                date={transaction.date}
                amount={parseInt(transaction.amount)}
                secondTitle={transaction.categoryDetail}
                details={transaction.textDetails}
              />
            </div>
          ))}
      </ItemWrapper>

      <AddTransaction setUpdateData={setUpdateData} />
    </div>
  );
}
