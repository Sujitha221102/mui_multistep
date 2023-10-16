import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useAppContext } from "../customHook/AppContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ThirdPage = ({ handleBack, handleNext, activeStep }) => {
  const { dispatch, toggle } = useAppContext();

  function handleAddon(addons, addAmount) {
    const finalAddon = `${addons}`;
    const finalAmounts = toggle?`${addAmount * 10}/yr` : `${addAmount}/mo`;

    console.log("handleButton", finalAmounts);

    dispatch({ type: "SET_ADDON", payload: finalAddon });
    dispatch({ type: "SET_ADDAMOUNT", payload: finalAmounts });
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ color: "#11347a", fontWeight: "bold" }}>
        Pick add-ons
      </Typography>
      <Typography sx={{ color: "gray" }}>
        Add-ons help enhance your gaming experience.
      </Typography>
      <Box>
        <Box
          sx={{
            border: "1px solid",
            borderRadius: 2,
            display: "flex",
            mt: 5,
            mb: 2,
          }}
        >
          <Checkbox
            {...label}
            // defaultChecked
            onChange={() => handleAddon("Online service", "1")}
          />
          <Box sx={{ p: 2 }}>
            <Typography sx={{ color: "#11347a", fontWeight: "bold" }}>
              Online service
            </Typography>
            <Typography sx={{ color: "gray" }}>
              Access to multiplayer games
            </Typography>
          </Box>
          <Typography sx={{ marginLeft: 10, mt: 2 }}>
            {toggle ? "$10/yr" : "$1/mo"}
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid",
            borderRadius: 2,
            display: "flex",
            my: 2,
            width: 450,
          }}
        >
          <Checkbox
            {...label}
            // defaultChecked
            onChange={() => handleAddon("Larger storage", "2")}
          />
          <Box sx={{ p: 2 }}>
            <Typography sx={{ color: "#11347a", fontWeight: "bold" }}>
              Larger storage
            </Typography>
            <Typography sx={{ color: "gray" }}>
              Extra 1TB of cloud save
            </Typography>
          </Box>
          <Typography sx={{ marginLeft: 14, mt: 2 }}>
            {toggle ? "$20/yr" : "$2/mo"}
          </Typography>
        </Box>
        <Box sx={{ border: "1px solid", borderRadius: 2, display: "flex" }}>
          <Checkbox
            {...label}
            onChange={() => handleAddon("Customizable profile", "3")}
          />
          <Box sx={{ p: 2 }}>
            <Typography sx={{ color: "#11347a", fontWeight: "bold" }}>
              Customizable profile
            </Typography>
            <Typography sx={{ color: "gray" }}>
              Custom theme on your profile
            </Typography>
          </Box>
          <Typography sx={{ marginLeft: 9, mt: 2 }}>
            {toggle ? "$30/yr" : "$3/mo"}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, marginTop: 10 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Go Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }}>
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default ThirdPage;
