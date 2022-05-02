import Head from "next/head";
import styled from "styled-components";
import { BasicButton, DeleteButton } from "components/styles/Button";

export default function Account() {
  const handleTest = () => {
    console.log("click");
  };

  return (
    <div>
      <Head>
        <title>Budget | Account</title>
      </Head>
      <h1>Account</h1>
      <BasicButton action={handleTest}>Click</BasicButton>
      <DeleteButton action={handleTest}>Delete</DeleteButton>
    </div>
  );
}
