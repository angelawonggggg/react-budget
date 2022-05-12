import { AccountDetailCard } from "./styles/Container";
import { AccountDetail } from "../utils/type";

export default function AccountDetails({
  toggleEditForm,
  account,
}: AccountDetail) {
  return (
    <AccountDetailCard account={account} toggleEditForm={toggleEditForm} />
  );
}
