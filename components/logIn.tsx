import styled from "styled-components";


export default function logIn() {


  return (
    <div>
      <h1>Log in</h1>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>

      <div>
        <label>Password</label>
        <input type="password" />
      </div>

      <button>Submit</button>
    </div>
  );
}
