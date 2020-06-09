import React from "react";

import { Container } from "./styles";

const Newsletter = () => {
  return (
    <Container>
      <div className="content">
        <h1>Receba Novidades do Instituto</h1>
        <input placeholder="Digite seu nome" />
        <input placeholder="Digite seu email" />
        <button>Receber</button>
      </div>
    </Container>
  );
};

export default Newsletter;
