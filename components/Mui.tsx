import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { NoteIcon } from "./styles/Icon";
import Box from "@mui/material/Box";
import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Select, MenuItem } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
type FormControlData = { control: any; name: string; data: string[] };
type FormControl = { control: any; name: string };

const NoteBox = styled(Box)`
  margin: 1rem 0;
`;

const TextFieldBox = styled(TextField)`
  width: 100%;
  margin: 1rem 0;
  height: 6rem;
`;
const DropDownBox = styled(Select)`
  margin: 1rem 0;
`;

const AmountBox = styled(OutlinedInput)`
  margin: 1rem 0;
  height: 3rem;
`;
export const DatePicker = ({ control, name }: FormControl) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        defaultValue={utc}
        render={({ field: { ref, ...rest } }) => (
          <KeyboardDatePicker
            margin="normal"
            format="dd/MM/yyyy"
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            {...rest}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  );
};

export const NoteInput = ({ control, name }: FormControl) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <NoteBox>
          <NoteIcon />
          <TextFieldBox
            {...field}
            multiline={true}
            placeholder="description"
            label="NOTE."
            variant="outlined"
          />
        </NoteBox>
      )}
    />
  );
};
export const AmountInput = ({ control, name }: FormControl) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth sx={{ m: 1 }} {...field}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <AmountBox
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      )}
    />
  );
};

export const DropDown = ({ control, name, data }: FormControlData) => {
  return (
    <Controller
      render={({ field }) => (
        <DropDownBox {...field}>
          {data &&
            data.map((title: string) => (
              <MenuItem key={uuidv4} value={title}>
                {title}
              </MenuItem>
            ))}
        </DropDownBox>
      )}
      name={name}
      control={control}
      defaultValue={data[0]}
    />
  );
};
