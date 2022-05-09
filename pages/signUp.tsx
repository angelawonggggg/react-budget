import Head from "next/head";
import styled from "styled-components";



export default function signUp(props: Props) {

  const Wrapper = styled.section`
    margin-left: 35px;
`;
  return (
    <div>
      <Head>
        <title>Budget | Sign Up</title>
      </Head>
      <Wrapper>
      <h1>Sign up</h1>
        <form>
          <label htmlFor="">Username</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button>Submit</button>
        </form>
      </Wrapper>



  
    </div>
  );
}


