import { AccountDetailCard } from "./styles/Container";
import { AccountDetail } from "../utils/type";
import { useState } from "react";
import { EditAccountForm } from "./styles/Form";
import axios from "axios";

export default function AccountDetails({ account }: AccountDetail) {
  // console.log(account);
  const [balanceChange, setBalanceChange] = useState(0);
  const newBalance = account.balance + balanceChange;
  const [isShowEditPopup, setIsShowEditPopup] = useState(false);

  const onSubmit = (e: any): void => {
    e.preventDefault();
    axios
      .put(`/api/accounts`, {
        id: account._id,
        balance: newBalance,
      })
      .then((data) => {
        console.log(data);
      })
      .finally(() => {
        setIsShowEditPopup(false);
      });
  };

  return (
    <>
      <AccountDetailCard
        account={account}
        toggleEditForm={(event) => {
          event?.preventDefault();
          setIsShowEditPopup(true);
        }}
      />
      {isShowEditPopup && (
        <EditAccountForm
          account={account}
          setBalanceChange={(event) =>
            setBalanceChange(parseFloat(event.target.value))
          }
          onSubmit={onSubmit}
          toggleEditForm={() => setIsShowEditPopup(false)}
        />
      )}
    </>
  );
}
