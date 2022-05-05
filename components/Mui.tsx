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

type FormControl = { control: any; name: string };

const NoteBox = styled(Box)`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const TextFieldBox = styled(TextField)`
  width: 50%;
  padding: 30;
  height: 7rem;
`;

export const DatePicker = ({ control, name }: FormControl) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <KeyboardDatePicker
            margin="normal"
            format="MM/dd/yyyy"
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
          <OutlinedInput
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      )}
    />
  );
};

export const DropDown = ({ control, name }: FormControl) => {
  return (
    <Controller
      render={({ field }) => (
        <Select {...field}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      )}
      name={name}
      control={control}
    />
  );
};
