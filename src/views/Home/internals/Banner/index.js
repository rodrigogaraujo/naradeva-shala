import React from "react";

import { Container } from "./styles";

const Banner = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};

export default Banner;
