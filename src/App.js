import { Box, Card } from "@mui/material";
import "./App.css";
import Steps from "./Steps";
import desktopImage from "./images/bg-sidebar-desktop.svg";

function App() {
  return (
    <Box sx={{ height: 565, backgroundColor: "#c6d9f7" ,p:2}}>
      <Card
        sx={{
          backgroundImage: `url(${desktopImage})`,
          backgroundRepeat: "no-repeat",
          fontFamily: "ubuntu",
          width: 890,
          height: 560,
          ml: 18,
        }}
      >
        <Steps />
      </Card>
    </Box>
  );
}

export default App;
