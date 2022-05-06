import Head from "next/head";
import { useState } from "react";
import AddAccount from "components/AddAccount";
import AccountDetail from "components/AccountDetail";
import { NetWorthCard, PageTopWrapper } from "components/styles/Container";
import { EditAccountForm } from "components/styles/Form";

export default function Account() {
  const count = 1;
  const account = "Cash";
  const balance = 100;
  const total = 100;
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowEditPopup, setIsShowEditPopup] = useState(false);

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
         <NetWorthCard total={total}/>
        <h3>You have {count} account</h3>
        <button onClick={togglePopupForm}>Add an account</button>
       
       </PageTopWrapper>
       
      
      {isShowPopup && <AddAccount closePopup={togglePopupForm} />}
      
      <AccountDetail toggleEditForm={toggleEditForm}/>
      {isShowEditPopup && <EditAccountForm account={account} balance={balance} toggleEditForm={toggleEditForm}/>}
    </div>
  );
}