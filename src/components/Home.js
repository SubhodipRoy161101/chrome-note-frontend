import React from "react";
import { Container } from "@mui/material";
import Addnote from "./Addnote";
import Notes from "./Notes";

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      <Addnote />
      <Notes />
    </Container>
  );
};

export default Home;
