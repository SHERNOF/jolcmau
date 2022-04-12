
import { Button, Container } from "@mui/material";
import { indigo } from "@mui/material/colors";
import React from "react";
import Header from "./components/header/Header";
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Frontpage from "./components/frontPage/Frontpage";

const myTheme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fornWeightLight: 400,
    fornWeightRegular: 500,
    fornWeightMedium: 600,
    fornWeightBold: 700,
  }
});
function App() {


  return (
    <ThemeProvider theme={myTheme}>
      <div className='App'>

        <Container>
          <Header></Header>
          <Frontpage></Frontpage>
          {/* <Button variant='contained'>SUBMIT</Button> */}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
