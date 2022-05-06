import { useForm } from "react-hook-form";
import styled from "styled-components";
import { DatePicker, NoteInput, AmountInput, DropDown } from "./Mui";
import { BasicButton } from "./styles/Button";
import { CategoriesData, SmallCategoriesData, AccountTypeData } from "./Data";
import { useState, useEffect } from "react";

type Form = {
  postType: string;
  setCardOpen: any;
};

const TranForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function TransactionForm({ postType, setCardOpen }: Form) {
  const [categoryName, setCategoryName] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const HandleSubmit = (data: any) => {
    console.log(postType, data);
    setCardOpen(false);
  };

  const categoryState = () => {
    const categoryChange = watch("category");

    if (categoryChange) {
      const target = SmallCategoriesData.find(
        (target) => target.name === categoryChange
      );
      setCategoryName(target.content);
    }
  };

  useEffect(() => {
    categoryState();
    console.log(categoryName);
    console.log(CategoriesData);
  }, [watch("category")]);

  return (
    <TranForm onSubmit={handleSubmit(HandleSubmit)}>
      <h1>{postType}</h1>
      <h2>${watch("amount")}</h2>
      <AmountInput control={control} name={"amount"} />
      <DropDown control={control} name={"category"} data={CategoriesData} />
      <DropDown control={control} name={"categoryDetail"} data={categoryName} />
      <DropDown control={control} name={"accountType"} data={AccountTypeData} />
      <NoteInput control={control} name={"textDetails"} />
      <DatePicker control={control} name={"date"} />
      <BasicButton children={"SUBMIT"} />
    </TranForm>
  );
}
