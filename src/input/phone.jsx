import { useState } from "react";
import { Box, TextField, Typography, FormHelperText } from "@mui/material";

import React from "react";

let errMsgs = {
  emptyField: "This field is required",
};

let numValidation = /^[0-9]{10}$/;

const PhoneNumber = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function handleBlur(e) {
    const { value } = e.target;
    setValue(value);
    const numberRegex = new RegExp(numValidation);
    setError(!numberRegex.test(value));
    if (props.onBlur) {
      props?.onBlur?.(e, !numberRegex.test(value));
    }
  }
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between",m:1 }}>
        <Typography>Phone Number</Typography>
        {error && (
          <FormHelperText id="component-error-text" error={error}>
            {value ? "": errMsgs.emptyField}
          </FormHelperText>
        )}
      </Box>
      <TextField
        error={error}
        sx={{ width: 450 }}
        id="outlined-basic"
        placeholder="e.g.+1 234 567 890"
        variant="outlined"
        {...props}
        onBlur={handleBlur}
      />
    </Box>
  );
};

export default PhoneNumber;
