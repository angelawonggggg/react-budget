import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  DatePicker,
  NoteInput,
  AmountInput,
  DropDown,
  RadioSector,
} from "./Mui";
import { BasicButton } from "./styles/Button";
import { CategoriesData, SmallCategoriesData, AccountTypeData } from "./Data";
import { useState, useEffect } from "react";
import { BoxWithTextAndInput } from "./styles/ContainerStyle";
type Form = {
  postType: string;
  setCardOpen: any;
};

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
  width: 20vw;
`;
const AmountHighlight = styled.div`
  font-weight: 600;
  font-size: 36px;
`;
const RadioSectorBox = styled.div`
  position: absolute;
  right: 1rem;
  
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
  }, [watch("category")]);

  return (
    <TranForm onSubmit={handleSubmit(HandleSubmit)}>
      <h1>{postType}</h1>

      <AmountTitle>
        $<AmountHighlight>{watch("amount")}</AmountHighlight>
      </AmountTitle>
      <DatePicker control={control} name={"date"} />
      <AmountInput control={control} name={"amount"} />
      <BoxWithTextAndInput>
        <SubTitle>CATEGORY:</SubTitle>
        <DropDown control={control} name={"category"} data={CategoriesData} />
        <RadioSectorBox>
          <RadioSector
            control={control}
            name={"categoryDetail"}
            data={categoryName}
          />
        </RadioSectorBox>
      </BoxWithTextAndInput>
      <BoxWithTextAndInput>
        <NoteInput control={control} name={"textDetails"} label={"NOTE"} />
      </BoxWithTextAndInput>
      <BoxWithTextAndInput>
        <SubTitle>From:</SubTitle>
        <DropDown
          control={control}
          name={"accountType"}
          data={AccountTypeData}
        />
      </BoxWithTextAndInput>

      <BasicButton children={"SUBMIT"} />
    </TranForm>
  );
}
