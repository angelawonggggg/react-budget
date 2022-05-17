import { AccountDetailCard } from "./styles/Container";
import { AccountDetail } from "../utils/type";
import { useState } from "react";
import { EditAccountForm } from "./styles/Form";
import axios from "axios";

export default function AccountDetails({ account }: AccountDetail) {
  const [isShowEditPopup, setIsShowEditPopup] = useState(false);
  const [balanceChange, setBalanceChange] = useState(0);
  const toggleEditForm = () => {
    setIsShowEditPopup(!isShowEditPopup);
  };

  const newBalance = account.balance + balanceChange;

  const onSubmit = (e): void => {
    e.preventDefault();
    console.log(account._id, account.balance, balanceChange, newBalance);

    axios
      .put(`/api/accounts`, {
        id: account._id,
        balance: newBalance,
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <AccountDetailCard account={account} toggleEditForm={toggleEditForm} />
      {isShowEditPopup && (
        <EditAccountForm
          accountType={account.accountType}
          balance={account.balance}
          setBalanceChange={(event) =>
            setBalanceChange(parseFloat(event.target.value))
          }
          onSubmit={onSubmit}
          toggleEditForm={toggleEditForm}
        />
      )}
    </>
  );
}
