import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavContext from "./NavContext";

const NavState = (props) => {
  let location = useLocation();
  let path = location.pathname;
  const [value, setValue] = React.useState(`${path}`);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <NavContext.Provider value={{ value, handleChange, setValue }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavState;
