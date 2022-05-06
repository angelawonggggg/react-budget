import { AccountDetailCard } from "./styles/Container";

export default function AccountDetail( {toggleEditForm}: { toggleEditForm: () => void } ) {
  const title = "Cash";
  const balance = 100;


  return <AccountDetailCard title={title} balance={balance} toggleEditForm={toggleEditForm}/>;
}
