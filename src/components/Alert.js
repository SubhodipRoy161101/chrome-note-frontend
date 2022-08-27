import React, { useContext } from "react";
import AlertBox from "@mui/material/Alert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

import CloseIcon from "@mui/icons-material/Close";

import AlertContext from "../context/Alert/AlertContext";

const Alert = (props) => {
  const alertContext = useContext(AlertContext);
  const { open, setOpen } = alertContext;
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <AlertBox
          severity={props.message.type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {props.message.msg}
        </AlertBox>
      </Collapse>
    </Box>
  );
};

export default Alert;
