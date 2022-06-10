import Head from "next/head";
import AddTransaction from "components/Transaction/AddTransaction";
import axios from "axios";
import { useEffect, useState } from "react";
import { AccountTransaction } from "utils/type";
import TransactionItem from "../components/Transaction/TransactionItem";
import { ItemWrapper } from "components/styles/Container";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { User } from "models/auth";
import { Button } from "../components/styles/Button";

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
        setTransactionData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, [updateData]);

  return (
    <div>
      <Head>
        <title>Budget | Home</title>
      </Head>

      {/* <Button color="red">Delete</Button> */}

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
      <small>
        <strong style={{ color: "gray" }}>
          {transactionData.length} transactions
        </strong>
      </small>

      <AddTransaction setUpdateData={setUpdateData} user={user} />
    </div>
  );
}
