import React from "react";

import ioga from "../../../../assets/ioga.jpg";
import { Container } from "./styles";
import Card from "./internals/Card";

const Blog = () => {
  return (
    <Container>
      <Card
        img={ioga}
        title="Formação e Aprimoramentoem Yoga - São Paulo / SP"
        description="C u r s o L i v r e d e F o r m a ç ã o e Aprimoramento em Yoga e
          Pós-Graduação Lato Sensu em Yoga (MEC) - Nova turma em março de 2019.
          Vagas limitadas"
      />
      <Card
        img={ioga}
        title="Formação e Aprimoramentoem Yoga - São Paulo / SP"
        description="C u r s o L i v r e d e F o r m a ç ã o e Aprimoramento em Yoga e
          Pós-Graduação Lato Sensu em Yoga (MEC) - Nova turma em março de 2019.
          Vagas limitadas"
      />
      <Card
        img={ioga}
        title="Formação e Aprimoramentoem Yoga - São Paulo / SP"
        description="C u r s o L i v r e d e F o r m a ç ã o e Aprimoramento em Yoga e
          Pós-Graduação Lato Sensu em Yoga (MEC) - Nova turma em março de 2019.
          Vagas limitadas"
      />
      <Card
        img={ioga}
        title="Formação e Aprimoramentoem Yoga - São Paulo / SP"
        description="C u r s o L i v r e d e F o r m a ç ã o e Aprimoramento em Yoga e
          Pós-Graduação Lato Sensu em Yoga (MEC) - Nova turma em março de 2019.
          Vagas limitadas"
      />
    </Container>
  );
};

export default Blog;
