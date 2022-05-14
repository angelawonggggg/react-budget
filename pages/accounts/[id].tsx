import { AccountTransactionCard } from "components/styles/Container";
import { Account } from "models/accounts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../../utils/type";
import { AccountTransaction } from "../../utils/type";

export default function AccountPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(`id: ${id}`);
  const [accountInfo, setAccountInfo] = useState<Account | null>(null);
  const [transactions, setTransactions] = useState<AccountTransaction[]>([]);

  const fetchTransactions = async (accountType: string) => {
    const res = await fetch(`/api/transaction/?accountType=${accountType}`);
    const data = await res.json();
    const { transactions } = data;
    console.log(data);
    return setTransactions(transactions);
  };

  useEffect(() => {
    if (id) {
      console.log(`Fetching account info for ${id}`);
      fetch("/api/accounts/" + id)
        .then((res) => res.json())
        .then(({ data }) => {
          setAccountInfo(data);
          fetchTransactions(data.title);
        });
    }
  }, [id]);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this account?")) {
      fetch("/api/accounts", {
        method: "DELETE",
      }).then((res) => res.json());
    } else {
      console.log("cancelled");
    }
  };

  return (
    <div>
      <h1>{accountInfo?.title}</h1>
      <div>Balance: ${accountInfo?.balance}</div>
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>

      {transactions?.map((transaction, idx) => (
        <div key={idx}>
          <AccountTransactionCard transaction={transaction} />
        </div>
      ))}
    </div>
  );
}
