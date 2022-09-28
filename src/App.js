import Homepage from "./pages/Homepage";
import Feed from "./pages/Feed";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";

function App() {
  return (
    <Box
      minHeight='100vh'
      backgroundColor='#74b9ff'
    >
      <CssBaseline />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/feed' element={<Feed />} />
      </Routes>
    </Box>
  );
}

export default App;
