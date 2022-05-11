import { AccountDetailCard } from "./styles/Container";
import { AccountDetail } from "../utils/type";

export default function AccountDetails({
  toggleEditForm,
  name,
  balance,
  accountId,
}: AccountDetail) {
  return (
    <AccountDetailCard
      name={name}
      balance={balance}
      accountId={accountId}
      toggleEditForm={toggleEditForm}
    />
  );
}
