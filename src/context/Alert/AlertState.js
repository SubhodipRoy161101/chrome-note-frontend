import React, { useState } from "react";
import AlertContext from "./AlertContext";

const AlertState = (props) => {
  const [alert, setAlert] = useState({ msg: "", type: "error" });
  const [open, setOpen] = React.useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3 * 1000);
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert, setOpen, open }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
