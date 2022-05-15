import { Account } from "models/accounts";

export type TransactionFormType = {
  postType: string;
  setCardOpen: any;
  setUpdateData: any;
};

export type AccountDetailBox = {
  toggleEditForm: (event: React.MouseEvent<SVGAElement>) => void;
  account: Account;
};

export type AccountDetail = {
  account: Account;
};

export type EditAccount = {
  account: Account;
  notes: string;
  balanceChange: number;
};

export type PopupForm = {
  title: string;
  accountTypes: Array<string>;
  balance: number;
  setAccountType: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  setBalance: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export type AccountForm = {
  accountType: string;
  balance: number;
  toggleEditForm: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export type ButtonType = {
  children: string;
};

export type AccountTransaction = {
  accountType: string;
  transactionType: string;
  amount: string;
  category: string;
  categoryDetail: string;
  date: string;
  textDetails: string;
};
