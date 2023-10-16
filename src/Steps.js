import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/Fourthpage";
import FifthPage from "./pages/FifthPage";

import { Typography } from "@mui/material";

const steps = [
  { step: "YOUR INFO", stepNum: "STEP 1" },
  { step: "SELECT PLAN", stepNum: "STEP 2" },
  { step: "ADD-ONS", stepNum: "STEP 3" },
  { step: "SUMMARY", stepNum: "STEP 4" },
];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep = isLastStep()
      ? steps.findIndex((step, i) => !(i in step))
      : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        m: 2,
      }}
    >
      <Stepper
        nonLinear
        activeStep={activeStep}
        sx={{
          height: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={activeStep[index]}>
            <StepButton
              onClick={handleStep(index)}
              sx={{
                width: 150,
                display: "flex",
                justifyContent: "flex-start",
                textAlign: "start",
              }}
            >
              <Typography sx={{ color: "white" }}>{label.stepNum}</Typography>
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
                {label.step}
              </Typography>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ marginLeft: 25 }}>
        <React.Fragment>
          {activeStep === 0 ? (
            <FirstPage
              activeStep={activeStep}
              handleNext={handleNext}
            />
          ) : (
            ""
          )}
          {activeStep === 1 ? (
            <SecondPage
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          ) : (
            ""
          )}
          {activeStep === 2 ? (
            <ThirdPage
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          ) : (
            ""
          )}
          {activeStep === 3 ? (
            <FourthPage
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          ) : (
            ""
          )}
          {activeStep === 4 ? <FifthPage activeStep={activeStep} /> : ""}
        </React.Fragment>
      </Box>
    </Box>
  );
}
