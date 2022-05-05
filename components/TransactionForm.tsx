import { useForm } from "react-hook-form";
import styled from "styled-components";
import { DatePicker, NoteInput, AmountInput, DropDown } from "./Mui";
import { BasicButton } from "./styles/Button";
import AddAccount from "./AddAccount";

type Form = {
  postType: string;
  setCardOpen: any;
};

const TranForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function TransactionForm({ postType, setCardOpen }: Form) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(postType, data);
    setCardOpen(false);
  };

  return (
    <TranForm onSubmit={handleSubmit(onSubmit)}>
      <h1>{postType}</h1>
      <h2>${watch("amount")}</h2>
      <AmountInput control={control} name={"amount"} />
      <DropDown control={control} name={"category"} />
      <DropDown control={control} name={"accountType"} />
      <NoteInput control={control} name={"textDetails"} />
      <DatePicker control={control} name={"date"} />
      <BasicButton children={"SUBMIT"} />
    </TranForm>
  );
}
