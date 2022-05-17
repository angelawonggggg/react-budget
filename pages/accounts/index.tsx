import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import AddAccount from "components/AddAccount";
import AccountDetails from "components/AccountDetails";
import { NetWorthCard, PageTopWrapper } from "components/styles/Container";
import { Account } from "models/accounts";

export default function AccountPage() {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowEditPopup, setIsShowEditPopup] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const total = accounts?.reduce((acc, curr) => acc + curr.balance, 0) ?? 0;

  const loadAccounts = () => {
    fetch("/api/accounts")
      .then((res) => res.json())
      .then(({ data }) => {
        setAccounts(data);
      });
  };
  useEffect(loadAccounts, [isShowEditPopup]);

  const togglePopupForm = () => {
    setIsShowPopup(!isShowPopup);
  };

  const toggleEditForm = () => {
    setIsShowEditPopup(!isShowEditPopup);
  };

  return (
    <div>
      <Head>
        <title>Budget | Account</title>
      </Head>

      <PageTopWrapper>
        <NetWorthCard total={total} />
        <button onClick={togglePopupForm}>Add an account</button>
      </PageTopWrapper>

      {isShowPopup && (
        <AddAccount closePopup={togglePopupForm} postSave={loadAccounts} />
      )}

      {accounts?.map?.((account, idx) => (
        <AccountDetails
          key={idx}
          account={account}
          toggleEditForm={toggleEditForm}
          isShowEditPopup={isShowEditPopup}
        />
      ))}
    </div>
  );
}
