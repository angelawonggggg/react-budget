import Head from "next/head";
import { useState } from "react";
import AddAccount from "components/AddAccount";
import AccountDetail from "components/AccountDetail";
import { PageTopWrapper } from "components/styles/Container";
import { EditAccountForm } from "components/styles/Form";

export default function Account() {
  const count = 0;
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowEditPopup, setIsShowEditPopup] = useState(false);

  const togglePopupForm = () => {
    setIsShowPopup(!isShowPopup);
  };

  const account = "Cash";
  const balance = 100;

  return (
    <div>
      <Head>
        <title>Budget | Account</title>
      </Head>

       <PageTopWrapper>
        <h3>You have {count} account</h3>
        <button onClick={togglePopupForm}>Add an account</button>
       </PageTopWrapper>
      
      {isShowPopup && <AddAccount closePopup={togglePopupForm} />}
      
      <AccountDetail/>
      {isShowEditPopup && <EditAccountForm account={account} balance={balance} />}
    </div>
  );
}
