
import * as S from "./styles/Container";


export default function AddAccount() {
    const title = "Add an account";
    const items = ["Cash", "Credit", "Debit", "Investment", "Transport Card", "Membership", "Other"];
  return (
    <div>
     

      <S.PopupContainer title={title} items={items}  />
    </div>
  );
}
