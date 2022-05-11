import { Account } from "models/accounts";

export type AccountDetail = {
  toggleEditForm: (event: React.MouseEvent<SVGAElement>) => void;
  account: Account;
};

export type PopupForm = {
  title: string;
  items: Array<string>;
  balance: number;
  setAccountType: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  setBalance: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export type AccountForm = {
  account: string;
  balance: number;
  toggleEditForm: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export type ButtonType = {
  children: string;
};
