import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useAppContext } from "../customHook/AppContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ThirdPage = ({ handleBack, handleNext, activeStep }) => {
  const { dispatch, toggle, selectedCheckbox, setSelectedCheckbox } =
    useAppContext();
  function handleAddon(addons, addAmount) {
    const finalAddon = `${addons}`;
    const finalAmounts = toggle ? `${addAmount * 10}/yr` : `${addAmount}/mo`;

    console.log("handleButton", finalAmounts);

    dispatch({ type: "SET_ADDON", payload: finalAddon });
    dispatch({ type: "SET_ADDAMOUNT", payload: finalAmounts });
    setSelectedCheckbox((selectedCheckbox) =>
      selectedCheckbox.includes(addons)
        ? selectedCheckbox.filter((addon) => addon !== addons)
        : [...selectedCheckbox, addons]
    );
  }
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ color: "#11347a", fontWeight: "bold", fontFamily: "ubuntu" }}
      >
        Pick add-ons
      </Typography>
      <Typography sx={{ color: "gray", fontFamily: "ubuntu" }}>
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
            checked={selectedCheckbox.includes("Online service")}
            onChange={() => handleAddon("Online service", "1")}
          />
          <Box sx={{ p: 2 }}>
            <Typography
              sx={{
                color: "#11347a",
                fontWeight: "bold",
                fontFamily: "ubuntu",
              }}
            >
              Online service
            </Typography>
            <Typography sx={{ color: "gray", fontFamily: "ubuntu" }}>
              Access to multiplayer games
            </Typography>
          </Box>
          <Typography sx={{ marginLeft: 10, mt: 2, fontFamily: "ubuntu" }}>
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
            checked={selectedCheckbox.includes("Larger storage")}
            onChange={() => handleAddon("Larger storage", "2")}
          />
          <Box sx={{ p: 2 }}>
            <Typography
              sx={{
                color: "#11347a",
                fontWeight: "bold",
                fontFamily: "ubuntu",
              }}
            >
              Larger storage
            </Typography>
            <Typography sx={{ color: "gray", fontFamily: "ubuntu" }}>
              Extra 1TB of cloud save
            </Typography>
          </Box>
          <Typography sx={{ marginLeft: 14, mt: 2, fontFamily: "ubuntu" }}>
            {toggle ? "$20/yr" : "$2/mo"}
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid",
            borderRadius: 2,
            display: "flex",
          }}
        >
          <Checkbox
            {...label}
            checked={selectedCheckbox.includes("Customizable profile")}
            onChange={() => handleAddon("Customizable profile", "3")}
          />
          <Box sx={{ p: 2 }}>
            <Typography
              sx={{
                color: "#11347a",
                fontWeight: "bold",
                fontFamily: "ubuntu",
              }}
            >
              Customizable profile
            </Typography>
            <Typography sx={{ color: "gray", fontFamily: "ubuntu" }}>
              Custom theme on your profile
            </Typography>
          </Box>
          <Typography sx={{ marginLeft: 8, mt: 2, fontFamily: "ubuntu" }}>
            {toggle ? "$30/yr" : "$3/mo"}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, marginTop: 7 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1, fontFamily: "ubuntu" }}
        >
          Go Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ mr: 1, backgroundColor: "#11347a", fontFamily: "ubuntu" }}
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default ThirdPage;
