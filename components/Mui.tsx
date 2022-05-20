import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { NoteIcon } from "./styles/Icon";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Select, MenuItem } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { v4 as uuidv4 } from "uuid";
const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
type FormControlData = {
  control: any;
  name: string;
  data: string[];
};
type FormControl = { control: any; name: string };

const DropDownBox = styled(Select)`
  width: 100%;
`;

const AmountBox = styled(OutlinedInput)`
  margin: 1rem 0;
  height: 3rem;
`;
const RadioOptionBox = styled(FormControlLabel)`
  width: 8rem;
`;

export const DatePicker = ({ control, name }: FormControl) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        defaultValue={utc}
        render={({ field: { ref, ...rest } }) => (
          <KeyboardDatePicker
            margin="normal"
            inputRef={ref}
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
        <TextField {...field} multiline rows={3} variant="outlined" />
      )}
    />
  );
};
export const AmountInput = ({ control, name }: FormControl) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { ref, ...field } }) => (
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <AmountBox
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            {...field}
            inputRef={ref}
          />
        </FormControl>
      )}
    />
  );
};

export const DropDown = ({ control, name, data }: FormControlData) => {
  return (
    <Controller
      render={({ field: { ref, ...field } }) => (
        <DropDownBox {...field} inputRef={ref}>
          {data &&
            data.map((title: string, uuidv4: number) => (
              <MenuItem key={uuidv4} value={title}>
                {title}
              </MenuItem>
            ))}
        </DropDownBox>
      )}
      name={name}
      control={control}
      defaultValue={data[0]}
      rules={{ required: true }}
    />
  );
};

export const RadioSector = ({ control, name, data }: FormControlData) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={data[0]}
      render={({ field }) => (
        <RadioGroup {...field}>
          {data &&
            data.map((title: string) => (
              <RadioOptionBox
                key={uuidv4}
                control={<Radio />}
                label={title}
                value={title}
              >
                {title}
              </RadioOptionBox>
            ))}
        </RadioGroup>
      )}
    />
  );
};
