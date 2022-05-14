import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  DatePicker,
  NoteInput,
  AmountInput,
  DropDown,
  RadioSector,
} from "./Mui";
import axios from "axios";
import { BasicButton } from "./styles/Button";
import { CategoriesData, SmallCategoriesData, AccountTypeData } from "./Data";
import { useState, useEffect } from "react";
import { BoxWithTextAndInput } from "./styles/ContainerStyle";
import { MotionIcon } from "components/styles/Icon";
type Form = {
  postType: string;
  setCardOpen: any;
  setUpdateData: any;
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
  width: 30vw;
`;
const AmountHighlight = styled.div`
  font-weight: 600;
  font-size: 36px;
`;
const RadioBox = styled.div`
  padding: 2rem;
  position: absolute;
  left: 0;
  width: 90vw;
  height: 20rem;
  box-shadow: 0 0 10px 2px grey;
  border-radius: 15px;
  top: 25rem;
  background-color: white;
  z-index: 10;
  border: 1px solid grey;
`;

export default function TransactionForm({
  setUpdateData,
  postType,
  setCardOpen,
}: Form) {
  const [categoryName, setCategoryName] = useState([]);
  const [categoryIcon, setcategoryIcon] = useState("");
  const [categoryDetail, setCategoryDetail] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const HandleSubmit = (data: any) => {
    axios
      .post("/api/transaction/", {
        accountType: data.accountType,
        amount: data.amount,
        category: data.category,
        categoryDetail: data.categoryDetail,
        date: data.date,
        textDetails: data.textDetails,
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

  const HandleCategory = () => {
    if (!categoryDetail) {
      setCategoryDetail(true);
    } else {
      setCategoryDetail(false);
    }
  };

  const categoryState = () => {
    const target = SmallCategoriesData.find(
      (target) => target.name === watch("category")
    );

    if (target.content && target.image) {
      setCategoryName(target.content);
      setcategoryIcon(target.image);
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
        <DropDown control={control} name={"category"} data={CategoriesData} />
      </BoxWithTextAndInput>

      {categoryIcon && (
        <BoxWithTextAndInput>
          <MotionIcon image={categoryIcon} action={HandleCategory} />
          <div>{watch("categoryDetail")}</div>
        </BoxWithTextAndInput>
      )}

      {categoryDetail && (
        <div onClick={HandleCategory}>
          <RadioBox>
            <RadioSector
              control={control}
              name={"categoryDetail"}
              data={categoryName}
            />
          </RadioBox>
        </div>
      )}

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

      <BasicButton children={"Add"} />
    </TranForm>
  );
}
