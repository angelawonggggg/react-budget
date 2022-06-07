import * as StyledForm from "./styles/Form";
import * as StyledContainer from "./styles/Container";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";
import axios from "axios";
import user from "pages/api/user";

export default function AddAccount({
  closePopup,
  postSave,
}: {
  closePopup: () => void;
  postSave: () => void;
}) {
  const title = "Add an account";
  const accountTypes = [
    "Cash",
    "Credit",
    "Debit",
    "Investment",
    "Transport Card",
    "Membership",
    "Other",
  ];

  const [accountType, setAccountType] = useState("Cash");
  const [accountBalance, setAccountBalance] = useState(0);

  const handleSubmit = (): void => {
    event.preventDefault();

    axios
      .post("/api/accounts/", {
        accountType: accountType,
        balance: accountBalance,
      })
      .then((data) => {
        console.log("data", data);
      })
      .catch(console.error)
      .finally(() => {
        closePopup();
        postSave();
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
            accountTypes={accountTypes}
            balance={accountBalance}
            setAccountType={(event) => setAccountType(event.target.value)}
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
