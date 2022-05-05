import * as StyledForm from "./styles/Form";
import * as StyledContainer from "./styles/Container";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";

export default function AddAccount({ closePopup }: { closePopup: () => void }) {
  const title = "Add an account";
  const items = [
    "Cash",
    "Credit",
    "Debit",
    "Investment",
    "Transport Card",
    "Membership",
    "Other",
  ];

  const [account, setAccount] = useState("");

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setAccount(account);
    console.log("submit, set to", account);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StyledContainer.Wrapper>
          <StyledForm.CloseIcon onClick={closePopup}>
            <TiDelete />
          </StyledForm.CloseIcon>
          <StyledForm.PopupForm
            title={title}
            items={items}
            onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setAccount(event.target.value);
            }}

            onClose={closePopup}
          />
        </StyledContainer.Wrapper>
      </form>
    </div>
  );
}
