import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import LinkStyle from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AlertContext from "../context/Alert/AlertContext";

import NavContext from "../context/navbar/NavContext";

import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [Credentials, setCredentials] = useState({
    email: "",
    password: "",
    cpassword: "",
    Name: "",
  });
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;

  let navigate = useNavigate();
  const theme = createTheme();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://tranquil-forest-39861.herokuapp.com/api/auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: Credentials.Name,
          email: Credentials.email,
          password: Credentials.password,
        }),
      }
    );

    const token = await response.json();
    console.log(token);

    if (token.authToken) {
      localStorage.setItem("token", token.authToken);
      console.log("Redirecting");
      showAlert("Signed-up In Sucessfully", "success");
      navigate("/");
      setValue("/");
    } else {
      showAlert("User Already Exist", "error");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
    switch (e.target.name) {
      case "cpassword":
        if (!e.target.value) {
          console.log("Please Enter Password");
        } else if (Credentials.password !== Credentials.cpassword) {
          console.log("Passwords Didnt Match");
          showAlert("Passwords Didn't Match", "error");
        }
        break;

      default:
        break;
    }
    // validateInput(e);
  };

  const context = useContext(NavContext);
  const { setValue } = context;

  const handleChange = () => {
    setValue("/login");
  };

  // const validateInput = (e) => {
  //   let { name, value } = e.target;

  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cpassword"
                  label="Confirm Password"
                  type="password"
                  id="cpassword"
                  autoComplete="new-password"
                  onChange={onChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox value="allowExtraEmails" color="primary" />
              }
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end" onClick={handleChange}>
              <Grid item>
                <LinkStyle component={Link} to="/login" variant="body2">
                  Already have an account? Sign in
                </LinkStyle>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
