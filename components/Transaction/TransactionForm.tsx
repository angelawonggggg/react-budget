import { useForm } from "react-hook-form";
import styled from "styled-components";
import { DatePicker, AmountInput, DropDown } from "../Mui";
import axios from "axios";
import { BasicButton } from "../styles/Button";
import { ExpenseCategoriesData, IncomeCategoriesData } from "../Data";
import { useState, useEffect } from "react";
import { BoxWithTextAndInput } from "../styles/ContainerStyle";
import { TransactionFormType } from "../../utils/type";
import { Account } from "models/accounts";

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
  height: 2rem;
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
  user,
}: TransactionFormType) {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const loadAccounts = () => {
    fetch("/api/accounts")
      .then((res) => res.json())
      .then(({ data }) => {
        const accountTypes = data.map((account) => account.accountType);
        setAccounts(accountTypes);
      });
  };

  useEffect(loadAccounts, []);

  const updateAccount = (transaction) => {
    axios
      .put("/api/accounts", {
        accountType: transaction.accountType,
        balanceChange: transaction.amount,
        transactionType: transactionType,
      })
      .catch((err) => {
        console.log("Error updating account", err);
      });
  };

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
        setCardOpen(false);
        setUpdateData(data);
      })
      .then(() => {
        updateAccount(data);
      })
      .catch((err) => {
        console.log("Error creating a new transaction", err);
      });
  };

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
        <SubTitle>{transactionType == "expense" ? "From: " : "To: "}</SubTitle>
        <DropDown control={control} name={"accountType"} data={accounts} />
      </BoxWithTextAndInput>

      <BasicButton children={"Add"} />
    </TranForm>
  );
}
