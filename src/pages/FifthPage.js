import React from "react";
import { Box, Typography } from "@mui/material";
import complete from "../images/icon-thank-you.svg";

const FifthPage = ({activeStep}) => {
  return (
    <Box sx={{ width: 450, textAlign: "center", mt: 19}}>
      <img src={complete} sx={{ width: 100, height: 100 }} />
      <Typography variant="h5">Thank you!</Typography>
      <Typography>
        Thanks for confirming your subscription!We hope you have fun using our
        platform.If you ever need support,please feel free to email us at
        support@loremgaming.com.
      </Typography>
    </Box>
  );
};

export default FifthPage;
