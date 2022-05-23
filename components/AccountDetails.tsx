import { AccountDetailCard } from "./styles/Container";
import { AccountDetail } from "../utils/type";
import { useState, useEffect, useRef } from "react";
import { EditAccountForm } from "./styles/Form";
import axios from "axios";

export default function AccountDetails({
  account,
  toggleEditForm,
  isShowEditPopup,
}: AccountDetail) {
  const [balanceChange, setBalanceChange] = useState(0);
  // const [accountExpenseSum, setAccountExpenseSum] = useState([]);

  // const accountExpenseSumList = useRef([]);

  // const fetchTransactions = async (accountType: String) => {
  //   console.log(accountType);
  //   const res = await axios.get(`/api/transaction/?transactionType=expense`);
  //   const data = await res.data.transactions;
  //   const accountExpenseSum = data
  //     .filter((transaction) => transaction.accountType === account.accountType)
  //     .reduce((acc, curr) => acc + curr.amount, 0);
  //   console.log(accountExpenseSum, account.accountType);
  //   // return accountExpenseSumList.current.push(accountExpenseSum);
  // };
  // console.log(accountExpenseSumList);

  // useEffect(() => {
  //   fetchTransactions();
  // });

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
      })
      .finally(() => {
        toggleEditForm();
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
