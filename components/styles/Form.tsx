import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { PopupForm, AccountForm, RegisterFormType } from "../../utils/type";

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
  padding: 5px 0;
`;

export const CloseIcon = styled.div`
position: absolute;
right: 10px;
top: 10px;

&:hover {
  color: gray;
  cursor: pointer;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
`;

const Item = styled.option`
  width: 100%;
  padding: 10px 5px;

  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;

const Label = styled.label`
  font-size: 12px;
  margin: 5px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
`;

const PopupCard = styled.div`
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  background-color: white;
  padding: 40px;
  transform: translateY(-50%);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const GetPopupForm = ({
  title,
  accountTypes,
  balance,
  setAccountType,
  setBalance,
  onClose,
}: PopupForm) => (
  <Overlay>
    <PopupCard>
      <CloseIcon onClick={onClose}>
        <TiDelete />
      </CloseIcon>

      <Title>{title}</Title>
      <Label> Account type </Label>

      <Select onChange={setAccountType}>
        {accountTypes?.map((item, id) => (
          <Item key={id} value={item}>
            {item}
          </Item>
        ))}
      </Select>
      <Label> Balance </Label>
      <Input type="number" value={balance} onChange={setBalance}></Input>
      <button>Submit</button>
    </PopupCard>
  </Overlay>
);

export const EditAccountForm = ({
  accountType,
  balance,
  setBalanceChange,
  onSubmit,
  toggleEditForm,
}: AccountForm) => (
  <Overlay>
    <PopupCard>
      <CloseIcon onClick={toggleEditForm}>
        <TiDelete />
      </CloseIcon>
      <form onSubmit={onSubmit}>
        <Title>{accountType}</Title>
        <Label>Current Balance</Label>
        <div>{"$" + balance}</div>
        <Label>Balance change </Label>
        <Input type="number" onChange={setBalanceChange}></Input>

        <button value="submit">Update</button>
      </form>
    </PopupCard>
  </Overlay>
);

export const RegisterForm = ({
  handleSubmit,
  setUsername,
  setPassword,
  username,
  password,
}: RegisterFormType) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="">Username</label>
    <input type="text" defaultValue={username} onChange={setUsername} />

    <label htmlFor="">Password</label>
    <input type="password" defaultValue={password} onChange={setPassword} />
    <button value="submit">Submit</button>
  </form>
);
