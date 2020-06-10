import React from "react";

import NavBar from "./internals/NavBar";
import { Container, Content } from "./styles";

const Dashboard = () => {
  return (
    <Container>
      <NavBar />
      <Content></Content>
    </Container>
  );
};

export default Dashboard;
