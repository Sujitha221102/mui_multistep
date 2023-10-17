import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";
import Email from "../input/email";
import Name from "../input/name";
import PhoneNumber from "../input/phone";

const FirstPage = ({ handleNext, activeStep }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [warn, setWarn] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phn: false,
  });

  const input = (value) => value.trim() === "";

  const handleNextClick = () => {
    const nameError = input(name);
    const emailError = input(email);
    const phnError = input(phn);

    setErrors({
      name: nameError,
      email: emailError,
      phn: phnError,
    });

    if (!nameError && !emailError && !phnError) {
      handleNext();
    } else {
      setWarn(true);
    }
  };
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWarn(false);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h5"
        sx={{ color: "#11347a", fontWeight: "bold", fontFamily: "ubuntu" }}
      >
        Personal info
      </Typography>
      <Typography sx={{ color: "gray", fontFamily: "ubuntu" }}>
        Please provide your name, email address, and phone number.
      </Typography>
      <Box sx={{ color: "#11347a" }}>
        <Name
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={(e) => setErrors({ ...errors, name: input(e.target.value) })}
        />
        <Email
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => setErrors({ ...errors, email: input(e.target.value) })}
        />
        <PhoneNumber
          value={phn}
          onChange={(e) => setPhn(e.target.value)}
          onBlur={(e) => setErrors({ ...errors, phn: input(e.target.value) })}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, marginTop: 11 }}>
        <Box sx={{ flex: "1 1 auto", fontFamily: "ubuntu" }} />
        <Button
          variant="contained"
          onClick={handleNextClick}
          sx={{ mr: 1, fontFamily: "ubuntu", backgroundColor: "#11347a" }}
          disabled={errors.name || errors.email || errors.phn}
        >
          Next Step
        </Button>
      </Box>
      <Snackbar open={warn} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          No field can be empty
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FirstPage;
