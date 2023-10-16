import { Box, Button, Typography } from "@mui/material";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { useAppContext } from "../customHook/AppContext";

const label = { inputProps: { "aria-label": "Switch demo" } };

const SecondPage = ({ handleBack, handleNext, activeStep }) => {
  const [selectedButton, setSelectedButton] = useState("Arcade");
  const { dispatch,toggle,setToggle } = useAppContext();

  const handleButton = (buttonName, amount) => {
    const Option = toggle ? "Yearly" : "Monthly";
    const Amount = toggle ? amount * 10 : amount;
    const finalButtonName = `${buttonName} (${Option})`;
    const finalAmount = `${Amount}/${Option}`;

    console.log("handleButton", finalButtonName);

    dispatch({ type: "BUTTON", payload: finalButtonName });
    dispatch({ type: "SET_BUTTON_NAME", payload: finalButtonName });
    dispatch({ type: "SET_AMOUNT", payload: finalAmount });

    setSelectedButton(buttonName);
  };
 useEffect(() => {
   handleButton(
     selectedButton,
     selectedButton === "Arcade"
       ? "9"
       : selectedButton === "Advanced"
       ? "12"
       : "15"
   );
 }, [selectedButton]);

  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <Box>
      <Typography variant="h5" sx={{ color: "#11347a", fontWeight: "bold" }}>
        Select your plan
      </Typography>
      <Typography sx={{ color: "gray" }}>
        You have the option of monthly or yearly billing.
      </Typography>
      <Box sx={{ display: "flex", mt: 3 }}>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: 160,
            width: 140,
            color: "black",
            m: 1,
            backgroundColor: selectedButton === "Arcade" ? "#c1cae8" : "",
          }}
          onClick={() => handleButton("Arcade", "9")}
        >
          <img src={arcade} sx={{ width: 70, height: 70 }} />
          <Box sx={{ textAlign: "start", mt: 3 }}>
            <Typography sx={{ color: "#11347a", fontWeight: "bold" }}>
              Arcade
            </Typography>
            {toggle ? (
              <Box>
                <Typography>$90/yr</Typography>
                <Typography sx={{ fontSize: 11, color: "#11347a" }}>
                  2 Months free
                </Typography>
              </Box>
            ) : (
              <Typography>$9/mo</Typography>
            )}
          </Box>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: 160,
            width: 140,
            color: "black",
            m: 1,
            backgroundColor: selectedButton === "Advanced" ? "#c1cae8" : "",
          }}
          onClick={() => handleButton("Advanced", "12")}
        >
          <img src={advanced} sx={{ width: 70, height: 70 }} />
          <Box sx={{ textAlign: "start", mt: 3 }}>
            <Typography sx={{ color: "#11347a", fontWeight: "bold" }}>
              Advanced
            </Typography>
            {toggle ? (
              <Box>
                <Typography>$120/yr</Typography>
                <Typography sx={{ fontSize: 11, color: "#11347a" }}>
                  2 Months free
                </Typography>
              </Box>
            ) : (
              <Typography>$12/mo</Typography>
            )}
          </Box>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: 160,
            width: 140,
            color: "black",
            m: 1,
            backgroundColor: selectedButton === "Pro" ? "#c1cae8" : "",
          }}
          onClick={() => handleButton("Pro", "15")}
        >
          <img src={pro} sx={{ width: 70, height: 70 }} />
          <Box sx={{ textAlign: "start", mt: 3 }}>
            <Typography sx={{ color: "#11347a", fontWeight: "bold" }}>
              Pro
            </Typography>
            {toggle ? (
              <Box>
                <Typography>$150/yr</Typography>
                <Typography sx={{ fontSize: 11, color: "#11347a" }}>
                  2 Months free
                </Typography>
              </Box>
            ) : (
              <Typography>$15/mo</Typography>
            )}
          </Box>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 2,
          p: 2,
          paddingLeft: 20,
          border: "1px solid transparent",
          borderRadius: 3,
          backgroundColor: "#e4e4f5",
        }}
      >
        <Typography sx={{ mt: 1 }}>Monthly</Typography>
        <Switch {...label} onChange={handleToggle} />
        <Typography sx={{ mt: 1 }}>Yearly</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, marginTop: 14 }}>
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

export default SecondPage;
