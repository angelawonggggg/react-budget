import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { RegisterForm } from "../components/styles/Form";

export default function signUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleChange = (e): void => {
  //   setUsername(e.target.value)
  //   setPassword(e.target.value)
  // }

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

      <h1>Sign up</h1>

      <RegisterForm
        handleSubmit={handleSubmit}
        setUsername={(e) => setUsername(e.target.value)}
        setPassword={(e) => setPassword(e.target.value)}
        username={username}
        password={password}
      />
    </div>
  );
}
