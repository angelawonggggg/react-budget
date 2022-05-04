import Head from "next/head";
import AddAccount from "components/AddAccount";
import { BasicButton } from "components/styles/Button";

export default function Account() {
  const count = 0;
  return (
    <div>
      <Head>
        <title>Budget | Account</title>
      </Head>

      <div>
        <h1>Account</h1>
        <h3>You have {count} account</h3>
        <BasicButton action="">Add an account</BasicButton>
      </div>


      <AddAccount />
    </div>
  );
}
