import { useForm } from "react-hook-form";
import styled from "styled-components";
import { DatePicker, NoteInput, AmountInput } from "./Mui";

const TranForm = styled.form`
  display: flex;
  flex-direction: column;
`;

type Form = {
  postType: string;
  setCardOpen: function;
};
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
      <AmountInput control={control} />
      <input {...register("category", { required: true })} />
      {errors.category && <span>This field is required</span>}
      <NoteInput control={control} />
      <DatePicker control={control} />
      <button type="submit">button</button>
    </TranForm>
  );
}
