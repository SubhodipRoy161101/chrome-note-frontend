import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import NotesRoundedIcon from "@mui/icons-material/NotesRounded";

const theme = createTheme({
  palette: {
    primary: {
      light: "#4f83cc",
      main: "#01579b",
      dark: "#002f6c",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fff",
      main: "#fff",
      dark: "#fff",
      contrastText: "#000",
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Tabs
          value="logo"
          textColor="primary"
          indicatorColor="secondary"
          centered
        >
          <Tab
            value="logo"
            icon={<NotesRoundedIcon />}
            label={"Chrome-Note"}
            iconPosition="start"
          />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
