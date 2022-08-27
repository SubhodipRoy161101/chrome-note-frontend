import React, { useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { Link } from "react-router-dom";

import NavContext from "../context/navbar/NavContext";
import Header from "./Header";

const theme = createTheme({
  palette: {
    primary: {
      light: "#4f83cc",
      main: "#01579b",
      dark: "#002f6c",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff844c",
      main: "#f4511e",
      dark: "#b91400",
      contrastText: "#000",
    },
  },
});

const Navbar = () => {
  const context = useContext(NavContext);
  const { value, handleChange } = context;

  var intFrameWidth = window.innerWidth;
  var smVariant = "standard";

  if (intFrameWidth <= 536) {
    smVariant = "fullWidth";
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          variant={smVariant}
          centered
        >
          {/* Set value="actualPath" in order make selected tabs work properly*/}
          <Tab value="/" label="Home" component={Link} to="/" />
          <Tab value="/About" label="About" component={Link} to="/About" />

          {!localStorage.getItem("token") && (
            <Tab value="/login" label="Login" component={Link} to="/login" />
          )}
          {!localStorage.getItem("token") && (
            <Tab value="/signup" label="Signup" component={Link} to="/signup" />
          )}
          {localStorage.getItem("token") && (
            <Tab value="/logout" label="Logout" component={Link} to="/logout" />
          )}
        </Tabs>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
