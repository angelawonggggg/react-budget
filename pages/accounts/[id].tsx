import { Account } from "models/accounts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../../utils/type";

export default function AccountPage() {
  const router = useRouter();
  const { id } = router.query;
  const [accountInfo, setAccountInfo] = useState<Account | null>(null);

  useEffect(() => {
    if (id) {
      fetch("/api/accounts/" + id)
        .then((res) => res.json())
        .then(({ data }) => {
          setAccountInfo(data);
        });
    }
  }, []);

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
    </div>
  );
}
