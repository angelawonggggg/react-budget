import React, { useState } from "react";
import { MainText } from "components/styles/Container";

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
        window.location.reload();
        console.log("Login successful");
      } else {
        console.log("Login failed");
      }
    });
  };

  return (
    <div>
      <MainText>Log in to your account</MainText>
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
