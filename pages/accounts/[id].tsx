import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Account() {
  const router = useRouter();
  const { id } = router.query;
  const [accountInfo, setAccountInfo] = useState("");
  console.log(accountInfo, id);

  useEffect(() => {
    fetch("/api/accounts/" + id)
      .then((res) => res.json())
      .then(({ data }) => {
        setAccountInfo(data);
      });
  }, []);

  return (
    <div>
      <h3>{accountInfo.title}</h3>
      <div>Balance: ${accountInfo.balance}</div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
