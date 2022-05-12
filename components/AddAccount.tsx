import * as StyledForm from "./styles/Form";
import * as StyledContainer from "./styles/Container";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";
import axios from "axios";

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

  const [account, setAccount] = useState("nnnnnn");
  const [accountBalance, setAccountBalance] = useState(0);

  const handleSubmit = (): void => {
    event.preventDefault();

    axios
      .post("/api/accounts/", {
        title: account,
        balance: accountBalance,
      })
      .then((data) => {
        console.log("data", data);
      })
      .catch(console.error)
      .finally(() => {
        closePopup();
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StyledContainer.Wrapper>
          <StyledForm.CloseIcon onClick={closePopup}>
            <TiDelete />
          </StyledForm.CloseIcon>

          <StyledForm.GetPopupForm
            title={title}
            items={items}
            balance={accountBalance}
            setAccountType={(event) => setAccount(event.target.value)}
            setBalance={(event) =>
              setAccountBalance(parseFloat(event.target.value))
            }
            onClose={closePopup}
          />
        </StyledContainer.Wrapper>
      </form>
    </div>
  );
}
