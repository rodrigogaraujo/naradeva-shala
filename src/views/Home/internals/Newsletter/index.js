import React from "react";

import { Container } from "./styles";

const Newsletter = () => {
  return (
    <Container>
      <h1>Receba Novidades do Instituto</h1>
      <input placeholder="Digite seu nome" />
      <input placeholder="Digite seu email" />
      <button>Receber</button>
    </Container>
  );
};

export default Newsletter;
