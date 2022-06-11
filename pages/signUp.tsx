import Head from "next/head";
import { FormWrapper } from "components/styles/Container";
import { MainText } from "components/styles/Container";
import { RegisterForm } from "../components/styles/Form";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e): void => {
    e.preventDefault();

    axios
      .post("/api/register/", {
        username: username,
        password: password,
      })
      .then((data) => {
        console.log("data", data);
      })
      .catch(console.error)
      .finally(() => {
        alert("Successfully registered");
      });
  };

  return (
    <div>
      <Head>
        <title>Budget | Sign Up</title>
      </Head>

      <FormWrapper>
        <MainText>Sign up</MainText>

        <RegisterForm
          handleSubmit={handleSubmit}
          setUsername={(e) => setUsername(e.target.value)}
          setPassword={(e) => setPassword(e.target.value)}
          username={username}
          password={password}
        />
      </FormWrapper>
    </div>
  );
}
