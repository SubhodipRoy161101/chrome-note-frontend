import React, { useContext, useState } from "react";
import { Grid, Item, Button, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavContext from "../context/navbar/NavContext";

const Logout = () => {
  const context = useContext(NavContext);
  const { setValue } = context;
  const handleChange = () => {
    localStorage.removeItem("token");
    navigate("/");
    setValue("/");
  };
  let navigate = useNavigate();
  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <h4>Are You Sure You Want To Logout ?</h4>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              sx={{ width: 150 }}
              color="success"
              onClick={handleChange}
            >
              Yes
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" sx={{ width: 150 }} color="error">
              No
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Logout;
