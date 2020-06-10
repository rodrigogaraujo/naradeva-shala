import React from "react";

import { Container, Content } from "./styles";
import NavBar from "../../internals/NavBar";

const Dashboard = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <form>
          <input placeholder="Nome" required />
          <input placeholder="Documento" required />
          <input placeholder="E-mail" type="email" required />
          <input placeholder="Senha" type="password" required />
          <input placeholder="Confirmar Senha" type="password" required />
          <button type="submit" className="save">
            Salvar
          </button>
        </form>
      </Content>
    </Container>
  );
};

export default Dashboard;
