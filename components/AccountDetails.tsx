import { AccountDetailCard } from "./styles/Container";
import { AccountDetail } from "../utils/type";


export default function AccountDetails({
  toggleEditForm,
  name,
  balance,
}: AccountDetail) {
  return (
    <AccountDetailCard
      name={name}
      balance={balance}
      toggleEditForm={toggleEditForm}
    />
  );
}
