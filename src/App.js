import { cyan, grey } from "@mui/material/colors";
import React, { useState } from "react";
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Frontpage from "./Pages/frontPage/Frontpage";
import Header from "./components/header/Header";
import About from "./Pages/about/About";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Services from "./Pages/services/Services";
import Details from "./Pages/Details/Details";

const myTheme = createTheme({
  palette: {
    primary: {
      main: cyan['A200'],
    },
    secondary: {
      main: grey[900]
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});
function App() {
  const [showHeader, setShowHeader] = useState(true)
  const scrollMe = (e) => {
    const evnt = e.nativeEvent.wheelDelta;
    if (evnt < 0) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  };
  const [componentVisible, setComponentVisible] = useState(true)
  const handleVisibility = () => {
    setComponentVisible(!componentVisible);
    console.log(componentVisible)
  };

  return (
    <ThemeProvider theme={myTheme}>

      <div className='App' onWheel={scrollMe}>
        <Header showHeader={showHeader} />
        <BrowserRouter >
          <Routes >
            <Route exact path='/' element={<Frontpage />} />
          </Routes>
          {
            componentVisible ?
              <About componentVisible={componentVisible} handleVisibility={handleVisibility} />
              :
              <Details handleVisibility={handleVisibility} componentVisible={componentVisible} />
          }




          <Services></Services>
        </BrowserRouter>
      </div>

    </ThemeProvider >
  );
}

export default App;
