import {
  AccountTransactionCard,
  MainText,
  NetWorthWrapper,
} from "components/styles/Container";
import { ScrollIcon } from "components/styles/Icon";
import { Account } from "models/accounts";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import "../../utils/type";
import { AccountTransaction } from "../../utils/type";
import { Button } from "components/styles/Button";

export default function AccountPage() {
  const router = useRouter();
  const { id } = router.query;
  const [accountInfo, setAccountInfo] = useState<Account | null>(null);
  const [transactions, setTransactions] = useState<AccountTransaction[]>([]);
  const [filteredList, setFilteredList] = useState<AccountTransaction[]>([]);
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);

  const fetchTransactions = async (accountType: string) => {
    const res = await fetch(`/api/transaction/?accountType=${accountType}`);
    const data = await res.json();
    const { transactions } = data;
    return setTransactions(transactions);
  };

  useEffect(() => {
    if (id) {
      fetch("/api/accounts/" + id)
        .then((res) => res.json())
        .then(({ data }) => {
          setAccountInfo(data);
          fetchTransactions(data.accountType);
        });
    }
  }, [id]);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this account?")) {
      fetch("/api/accounts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => res.json())
        .then(({ data }) => {
          console.log(data);
        });
    } else {
      console.log("cancelled");
    }
  };

  const filterList = (type: string) => {
    if (transactions.length === 0) return;

    if (type === "all") {
      return setFilteredList(transactions);
    }
    setFilteredList(
      transactions.filter((transaction) => transaction.transactionType === type)
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.screenY) {
        setShowScrollTopBtn(true);
      } else {
        setShowScrollTopBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <NetWorthWrapper>
        <h1>{accountInfo?.accountType}</h1>
        <div>Balance: ${accountInfo?.balance}</div>

        <Button color="red" onClick={handleDelete}>
          Delete Account
        </Button>
      </NetWorthWrapper>

      <select onChange={(e) => filterList(e.target.value)}>
        <option value="all">All</option>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      {filteredList.length == 0 &&
        transactions?.map((transaction, idx) => (
          <div key={idx}>
            <AccountTransactionCard transaction={transaction} />
          </div>
        ))}

      {filteredList?.map((transaction, idx) => (
        <div key={idx}>
          <AccountTransactionCard transaction={transaction} />
        </div>
      ))}

      {transactions.length === 0 && <MainText>No transactions yet</MainText>}

      {showScrollTopBtn ? (
        <ScrollIcon>
          <FaArrowAltCircleUp onClick={scrollToTop} />
        </ScrollIcon>
      ) : null}
    </div>
  );
}
