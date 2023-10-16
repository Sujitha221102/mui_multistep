import { Box, Card } from "@mui/material";
import "./App.css";
import Steps from "./Steps";
import FirstPage from "./pages/FirstPage";
import desktopImage from "./images/bg-sidebar-desktop.svg";

function App() {
  return (
    <Card
      sx={{
        backgroundImage: `url(${desktopImage})`,
        backgroundRepeat: "no-repeat",
        width: 900,
        height: 570,
        m:2,
        ml:20
      }}
    >
      <Steps />
    </Card>
  );
}

export default App;
