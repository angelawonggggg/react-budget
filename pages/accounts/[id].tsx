import { AccountTransactionCard } from "components/styles/Container";
import { Account } from "models/accounts";
import { useRouter } from "next/router";
import React, { ReactEventHandler, useEffect, useState } from "react";
import { MdFilterList } from "react-icons/md";
import "../../utils/type";
import { AccountTransaction } from "../../utils/type";

export default function AccountPage() {
  const router = useRouter();
  const { id } = router.query;
  const [accountInfo, setAccountInfo] = useState<Account | null>(null);
  const [transactions, setTransactions] = useState<AccountTransaction[]>([]);

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

  const filterList = (event: React.MouseEventHandler) => {
    const result = transactions.filter(
      (transaction) => transaction.transactionType === `${event}`
    );
    setTransactions(result);
  };

  return (
    <div>
      <h1>{accountInfo?.accountType}</h1>
      <div>Balance: ${accountInfo?.balance}</div>
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>

      <button onClick={(e) => filterList(e.target.value)} value="expense">
        Expense
      </button>
      <button onClick={(e) => filterList(e.target.value)} value="income">
        Income
      </button>

      <select>
        <option>Date</option>
        <option>Amount</option>
        <option>Category</option>
      </select>

      {transactions?.map((transaction, idx) => (
        <div key={idx}>
          <AccountTransactionCard transaction={transaction} />
        </div>
      ))}

      {transactions.length === 0 && <div>No transactions yet</div>}
    </div>
  );
}
