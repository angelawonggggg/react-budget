export type AccountDetail = {
    name: string;
    balance: number;
    toggleEditForm: (event: React.MouseEvent<SVGAElement>) => void;
  };


export  type PopupForm = {
    title: string;
    items: Array<string>;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClose: (event: React.MouseEvent<HTMLInputElement>) => void;
  };
  
export type AccountForm = {
    account: string;
    balance: number;
    toggleEditForm: (event: React.MouseEvent<SVGAElement>) => void;
  };

export type ButtonType = {
  children: string;
};