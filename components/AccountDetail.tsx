import { AccountDetailCard } from "./styles/Container";

export default function AccountDetail() {
  const title = "Cash";
  const balance = 100;

  const onEdit = () => {
    console.log("edit");
  }

  return <AccountDetailCard title={title} balance={balance} onEdit={onEdit}/>;
}
