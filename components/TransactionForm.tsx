import { useForm } from "react-hook-form";
import styled from "styled-components";

const TranForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function TransactionForm({ postType, setCardOpen }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(postType, data);
    setCardOpen(false);
  };

  return (
    <TranForm onSubmit={handleSubmit(onSubmit)}>
      <h1>{postType}</h1>
      <h2>${watch("amount")}</h2>
      <input {...register("amount")} />
      {errors.amount && <span>This field is required</span>}
      <input {...register("category", { required: true })} />
      {errors.category && <span>This field is required</span>}
      <input {...register("note")} />
      <input {...register("date")} />
      <button type="submit">button</button>
    </TranForm>
  );
}
