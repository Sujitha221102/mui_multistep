import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useAppContext } from "../customHook/AppContext";

const Fourthpage = ({ handleBack, handleNext, activeStep, setActiveStep }) => {
  const { state, toggle } = useAppContext();
  const { buttonName, amount, addons, addAmount } = state;

  function handleChange() {
    setActiveStep((prevActiveStep) => prevActiveStep - 2);
  }
  const total =
    parseFloat(amount) +
    addAmount.reduce((acc, value) => acc + parseFloat(value), 0);

  return (
    <Box sx={{ width: 450 }}>
      <Typography variant="h5" sx={{ color: "#11347a", fontWeight: "bold" }}>
        Finishing up
      </Typography>
      <Typography sx={{ color: "gray" }}>
        Double-check everything looks OK before confirming
      </Typography>
      <Box
        sx={{
          backgroundColor: "#e4e4f5",
          p: 2,
          borderRadius: 2,
          mt: 5,
          height: 200,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography>{buttonName}</Typography>
            <Button variant="text" onClick={handleChange}>
              Change
            </Button>
          </Box>
          <Typography sx={{ ml: 25 }}>+${amount}</Typography>
        </Box>
        <hr />
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ width: 200 }}>
            {addons.map((item, index) => (
              <Typography key={index}>{item}</Typography>
            ))}
          </Typography>
          <Typography sx={{ ml: 15 }}>
            {addAmount.map((value, index) => (
              <Typography
                sx={{ dispay: "flex", flexDirection: "column" }}
                key={index}
              >
                +${value}
              </Typography>
            ))}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ mt: 2, width: 200 }}>
          Total {toggle ? "(Per Year)" : "(Per Month)"}
        </Typography>
        <Typography sx={{ ml: 18, mt: 2 }}>
          ${total}/{toggle ? "Yearly" : "Monthly"}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, marginTop: 10 }}>
        <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
          Go Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }}>
          {activeStep === 3 ? "confirm" : "Next Step"}
        </Button>
      </Box>
    </Box>
  );
};

export default Fourthpage;
