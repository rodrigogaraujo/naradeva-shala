import React from "react";

import naradeva from "../../assets/naradeva.jpg";

import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import NavBarBottom from "../../components/NavBarBottom";

import { Container } from "./styles";

const AboutUs = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <NavBarBottom />
      <Container>
        <section className="title">
          <header>
            <h1>NARADEVA SHALA</h1>
          </header>
          <h2>Instituto de Cultura Hindu</h2>
          <img src={naradeva} alt="Naradeva Shala" />
        </section>
        <section>
          <header>
            <h2>Significado do nome Naradeva Shala</h2>
          </header>
          <article>
            <h2>Nara</h2>
            <p>
              É o Hierarca (o Poderoso Maharishi) que ocupa o alto cargo de
              Secretário do Mandalam na Divina Hierarquia ou Governo Espiritual
              do Planeta Terra. Ele é o “Representante Mediador” da Humanidade,
              e seu Porta-Voz junto ao Ishwara Terrestre, Naráyana, o Senhor e
              Governante Supremo, que dirige toda a evolução da Terra. –
              Literalmente Nara quer dizer “Homem”, o Homem Original e Eterno.
              Nara e Naráyana são duplo Avatara de Vishnu (em plano mais alto).
              Os dois estão sempre juntos, e sempre que Naráyana Se manifesta
              como Avatara no plano físico, Nara O acompanha; por isso, no Cap.
              I, v. 30 da Bhagavad Gita, Sanjaya se refere a Arjuna e Krishna
              como os “Divinos Gêmeos Nara e Naráyana”. No Mahabhárata são
              feitas abundantes referências a Sri Krishna e a Arjuna como
              Avataras de Naráyana e Nara. Nara é o Regente do Vasudeva Rekha (o
              Raio ao qual pertence a Humanidade), do qual os 7 Raios conhecidos
              são subdivisões.
            </p>
          </article>
          <article>
            <h2>Deva</h2>
            <p>
              Um ser resplandecente (da raiz “div”, que significa brilhar,
              resplandecer). Um Deva é sempre um ser celestial. Os Devas habitam
              os três planos ou mundos superiores ao nosso (em ordem de
              sutileza). Os Devas são, na Índia, o que os Anjos e Arcanjos são
              para os Cristãos. – Deva significa também: divino, celeste,
              glorioso, resplandecente. São chamados Devas, também, os Espíritos
              da Natureza, os Elementais.
            </p>
          </article>
          <article>
            <h2>Sala (shala)</h2>
            <p>Casa, mansão, área de trabalho, escola, espaço etc.....</p>
          </article>
          <article>
            <h2>Naradeva Sala (shala)</h2>
            <p>Local de convivência auspiciosa.</p>
          </article>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
