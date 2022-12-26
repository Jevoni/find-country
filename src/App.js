import Homepage from "./pages/Homepage";
import Feed from "./pages/Feed";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";

import styles from './App.module.css'

function App() {
  return (
    <Box className={styles.app}>
      <CssBaseline />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/feed' element={<Feed />} />
      </Routes>
    </Box>
  );
}

export default App;
