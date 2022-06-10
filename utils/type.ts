// import { ClickAwayListenerProps } from "@material-ui/core";
import { Account } from "models/accounts";

export type TransactionFormType = {
  postType: string;
  setCardOpen: any;
  setUpdateData: any;
  transactionType: string;
  user: Object;
};

export type AccountDetailBox = {
  toggleEditForm: (event: React.MouseEvent<HTMLDivElement>) => void;
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
  // accountType: string;
  // balance: number;
  account: Account;
  toggleEditForm: (event: React.MouseEvent<HTMLDivElement>) => void;
  setBalanceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEventHandler<HTMLFormElement>) => void;
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

export type LineChart = {
  dataset: Array<any>;
  labels: Array<string>;
  stats: Array<number>;
};

export type DoughnutChart = {
  // categories: Array<string>;
  // categorySum: Array<number>;
  content: Array<any>;
};

export type BarChart = {
  content: Array<any>;
};

export type Theme = {
  toggleTheme: (event: React.MouseEvent<SVGAElement>) => void;
  isDark: boolean;
};

export type RegisterFormType = {
  username: string;
  password: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setUsername: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
