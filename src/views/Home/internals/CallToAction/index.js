import React from "react";

import { Container } from "./styles";

const CallToAction = () => {
  return (
    <Container>
      <section className="top-action">
        <div className="content-action">
          <h1>Oferecer aqui um Ebook</h1>
          <a href="!#">Baixar Ebook</a>
        </div>
      </section>
      <section className="bottom-action">
        <div className="store">
          <div className="img"></div>
          <div className="content-store">
            <h1>Loja Online</h1>
            <p>
              Nós oferecemos uma gama completa de produtos de estilo de vida
              Ayurveda. Você pode encomendar por telefone ou online.
            </p>
            <a href="!#">Comprar</a>
          </div>
        </div>
        <div className="store">
          <div className="img"></div>
          <div className="content-store">
            <h1>Loja Online</h1>
            <p>
              Nós oferecemos uma gama completa de produtos de estilo de vida
              Ayurveda. Você pode encomendar por telefone ou online.
            </p>
            <a href="!#">Comprar</a>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CallToAction;
