import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  DatePicker,
  NoteInput,
  AmountInput,
  DropDown,
  RadioSector,
} from "../Mui";
import axios from "axios";
import { BasicButton } from "../styles/Button";
import {
  ExpenseCategoriesData,
  IncomeCategoriesData,
  SmallCategoriesData,
  AccountTypeData,
} from "../Data";
import { useState, useEffect } from "react";
import { BoxWithTextAndInput } from "../styles/ContainerStyle";
import { TransactionFormType } from "../../utils/type";

const TranForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const AmountTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  margin: 1rem 0;
  height: 3rem;
`;
const SubTitle = styled.div`
  width: 30vw;
`;
const AmountHighlight = styled.div`
  font-weight: 600;
  font-size: 36px;
`;

export default function TransactionForm({
  setUpdateData,
  setCardOpen,
  transactionType,
}: TransactionFormType) {
  const [categoryName, setCategoryName] = useState([]);
  const [categoryIcon, setCategoryIcon] = useState("");

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const HandleSubmit = (data: any) => {
    axios
      .post("/api/transaction", {
        transactionType: transactionType,
        accountType: data.accountType,
        amount: data.amount,
        category: data.category,
        date: data.date,
      })
      .then((data) => {
        console.log("get data", data);
        setCardOpen(false);
        setUpdateData(data);
      })
      .catch((err) => {
        console.log("Error creating a new transaction", err);
      });
  };

  const categoryState = () => {
    const target = SmallCategoriesData.find(
      (target) => target.name === watch("category")
    );

    if (target?.content && target?.image) {
      setCategoryName(target?.content);
      setCategoryIcon(target?.image);
    } else {
      console.log("No such type");
    }
  };

  useEffect(() => {
    categoryState();
  }, [watch("category")]);

  return (
    <TranForm onSubmit={handleSubmit(HandleSubmit)}>
      <AmountTitle>
        $<AmountHighlight>{watch("amount")}</AmountHighlight>
      </AmountTitle>
      <DatePicker control={control} name={"date"} />
      <AmountInput control={control} name={"amount"} />

      <BoxWithTextAndInput>
        <SubTitle>CATEGORY:</SubTitle>
        <DropDown
          control={control}
          name={"category"}
          data={
            transactionType == "expense"
              ? ExpenseCategoriesData
              : IncomeCategoriesData
          }
        />
      </BoxWithTextAndInput>

      <BoxWithTextAndInput>
        <SubTitle>From:</SubTitle>
        <DropDown
          control={control}
          name={"accountType"}
          data={AccountTypeData}
        />
      </BoxWithTextAndInput>

      <BasicButton children={"Add"} />
    </TranForm>
  );
}
