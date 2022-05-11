import Head from "next/head";
import { useState, useEffect } from "react";
import AddAccount from "components/AddAccount";
import AccountDetails from "components/AccountDetails";
import { NetWorthCard, PageTopWrapper } from "components/styles/Container";
import { EditAccountForm } from "components/styles/Form";

interface Accounts {
  name: string;
  balance: number;
}

export default function Account() {
  const account = "Cash";
  const balance = 100;
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowEditPopup, setIsShowEditPopup] = useState(false);
  const [accounts, setAccounts] = useState<Accounts[]>([]);
  const total = accounts?.reduce((acc, curr) => acc + curr.balance, 0) ?? 0;

  useEffect(() => {
    fetch("/api/accounts")
      .then((res) => res.json())
      .then((data) => setAccounts(data.accounts));
  });

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

      {isShowPopup && <AddAccount closePopup={togglePopupForm} />}

      {accounts?.map?.((account, idx) => (
        <AccountDetails
          key={idx}
          toggleEditForm={toggleEditForm}
          name={account.name}
          accountId={account.id}
          balance={account.balance}
        />
      ))}

      {isShowEditPopup && (
        <EditAccountForm
          account={account}
          balance={balance}
          toggleEditForm={toggleEditForm}
        />
      )}
    </div>
  );
}
