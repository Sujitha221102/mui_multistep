import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  FormHelperText,
} from "@mui/material";

import React from "react";


let errMsgs = {
  emptyField: "This field is required",
  wrongPwd: "Enter Valid Email format",
};

let emailValidation = /^[\w]+@[a-zA-Z\d]+\.[a-zA-Z]{2,}$/;

const Email = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function handleBlur(e) {
    const { value } = e.target;
    setValue(value);
    const emailRegex = new RegExp(emailValidation);
    setError(!emailRegex.test(value));
     if (props.onBlur) {
       props?.onBlur?.(e, !emailRegex.test(value));
     }
  }
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" ,m:1}}>
        <Typography>Email Address</Typography>
        {error && (
          <FormHelperText id="component-error-text" error={error}>
            {value ? errMsgs.wrongPwd : errMsgs.emptyField}
          </FormHelperText>
        )}
      </Box>
      <TextField
        error={error}
        sx={{ width: 450 }}
        id="outlined-basic"
        placeholder="e.g.stephenking@lorem.com"
        variant="outlined"
        {...props}
        onBlur={handleBlur}
      />
    </Box>
  );
}

export default Email