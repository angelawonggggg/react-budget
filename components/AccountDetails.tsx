import { AccountDetailCard } from "./styles/Container";
import { AccountDetail } from "../utils/type";
import { useState } from "react";
import { EditAccountForm } from "components/styles/Form";

export default function AccountDetails({ account }: AccountDetail) {
  const [isShowEditPopup, setIsShowEditPopup] = useState(false);
  const toggleEditForm = () => {
    setIsShowEditPopup(!isShowEditPopup);
  };

  return (
    <>
      <AccountDetailCard account={account} toggleEditForm={toggleEditForm} />
      {isShowEditPopup && (
        <EditAccountForm
          accountType={account.title}
          balance={account.balance}
          toggleEditForm={toggleEditForm}
        />
      )}
    </>
  );
}
