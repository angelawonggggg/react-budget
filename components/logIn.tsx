import React, { useState } from "react";
import styled from "styled-components";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const formSubmit = () => {
    console.log("logging in");
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Login successful");
      } else {
        console.log("Login failed");
      }
    });
  };

  return (
    <div>
      <h1>Log in to your account</h1>
      <div>
        <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div>
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button onClick={formSubmit}>Submit</button>
    </div>
  );
}
