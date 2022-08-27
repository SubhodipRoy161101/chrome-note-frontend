import React, { useContext } from "react";
import { Container } from "@mui/material";
import Alert from "./Alert";

import AlertContext from "../context/Alert/AlertContext";

const ShowAlert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    <div>
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <Alert message={alert} />
      </Container>
    </div>
  );
};

export default ShowAlert;
