import { useState } from "react";
import { Box, TextField, Typography, FormHelperText } from "@mui/material";

import React from "react";

let errMsgs = {
  emptyField: "This field is required",
  wrongPwd: "Enter only alphabets",
};

let nameValidation = /^[A-Za-z]+$/;

const Name = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function handleBlur(e) {
    const { value } = e.target;
    setValue(value);
    const nameRegex = new RegExp(nameValidation);
    setError(!nameRegex.test(value));
    if (props.onBlur) {
      props?.onBlur?.(e, !nameRegex.test(value));
    }
  }
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" ,m:1}}>
        <Typography>Name</Typography>
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
        placeholder="e.g.stephen king"
        variant="outlined"
        {...props}
        onBlur={handleBlur}
      />
    </Box>
  );
};

export default Name;
