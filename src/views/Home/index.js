import React from "react";

import {
  FaPhone,
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaHome,
  FaPlay,
  FaCalendar,
} from "react-icons/fa";

import { CallToAction, BannerTwo, Blog, Footer, Container } from "./styles";
import ioga from "../../assets/ioga.jpg";
import avp from "../../assets/avp.png";
import scholl from "../../assets/escola.png";

import TopBar from "./internals/TopBar";
import NavBar from "./internals/NavBar";
import NavBarBottom from "./internals/NavBarBottom";
import Banner from "./internals/Banner";
import Newsletter from "./internals/Newsletter";

const Home = () => {
  return (
    <Container>
      <TopBar />
      <NavBar />
      <NavBarBottom />
      <Banner title="Bem-vindo ao Instituto de Cultura Hindu Naradeva Shala" />
      <Newsletter />
      <Blog>
        <ul>
          <li>
            <img src={ioga} alt="Ioga" />
            <h1>Formação e Aprimoramentoem Yoga - São Paulo / SP</h1>
            <p>
              C u r s o L i v r e d e F o r m a ç ã o e Aprimoramento em Yoga e
              Pós-Graduação Lato Sensu em Yoga (MEC) - Nova turma em março de
              2019. Vagas limitadas
            </p>
          </li>
          <li>
            <img src={ioga} alt="Ioga" />
            <h1>Formação e Aprimoramentoem Yoga - São Paulo / SP</h1>
            <p>
              C u r s o L i v r e d e F o r m a ç ã o e Aprimoramento em Yoga e
              Pós-Graduação Lato Sensu em Yoga (MEC) - Nova turma em março de
              2019. Vagas limitadas
            </p>
          </li>
          <li>
            <img src={ioga} alt="Ioga" />
            <h1>Formação e Aprimoramentoem Yoga - São Paulo / SP</h1>
            <p>
              C u r s o L i v r e d e F o r m a ç ã o e Aprimoramento em Yoga e
              Pós-Graduação Lato Sensu em Yoga (MEC) - Nova turma em março de
              2019. Vagas limitadas
            </p>
          </li>
          <li>
            <img src={ioga} alt="Ioga" />
            <h1>Formação e Aprimoramentoem Yoga - São Paulo / SP</h1>
            <p>
              C u r s o L i v r e d e F o r m a ç ã o e Aprimoramento em Yoga e
              Pós-Graduação Lato Sensu em Yoga (MEC) - Nova turma em março de
              2019. Vagas limitadas
            </p>
          </li>
        </ul>
      </Blog>
      <BannerTwo />
      <Blog>
        <ul>
          <li>
            <img src={ioga} alt="Ioga" />
            <h1>Formação e Aprimoramentoem Yoga - São Paulo / SP</h1>
            <p>
              C u r s o L i v r e d e F o r m a ç ã o e Aprimoramento em Yoga e
              Pós-Graduação Lato Sensu em Yoga (MEC) - Nova turma em março de
              2019. Vagas limitadas
            </p>
          </li>
          <li>
            <img src={ioga} alt="Ioga" />
            <h1>Formação e Aprimoramentoem Yoga - São Paulo / SP</h1>
            <p>
              C u r s o L i v r e d e F o r m a ç ã o e Aprimoramento em Yoga e
              Pós-Graduação Lato Sensu em Yoga (MEC) - Nova turma em março de
              2019. Vagas limitadas
            </p>
          </li>
          <li>
            <img src={ioga} alt="Ioga" />
            <h1>Formação e Aprimoramentoem Yoga - São Paulo / SP</h1>
            <p>
              C u r s o L i v r e d e F o r m a ç ã o e Aprimoramento em Yoga e
              Pós-Graduação Lato Sensu em Yoga (MEC) - Nova turma em março de
              2019. Vagas limitadas
            </p>
          </li>
          <li>
            <img src={ioga} alt="Ioga" />
            <h1>Formação e Aprimoramentoem Yoga - São Paulo / SP</h1>
            <p>
              C u r s o L i v r e d e F o r m a ç ã o e Aprimoramento em Yoga e
              Pós-Graduação Lato Sensu em Yoga (MEC) - Nova turma em março de
              2019. Vagas limitadas
            </p>
          </li>
        </ul>
      </Blog>
      <CallToAction>
        <section className="top-action">
          <h1>Oferecer aqui um Ebook</h1>
          <a href="!#">Baixar Ebook</a>
        </section>
        <section className="bottom-action">
          <div className="store">
            <h1>Loja Online</h1>
            <p>
              Nós oferecemos uma gama completa de produtos de estilo de vida
              Ayurveda. Você pode encomendar por telefone ou online.
            </p>
            <a href="!#">Comprar</a>
          </div>
          <div className="store">
            <h1>Loja Online</h1>
            <p>
              Nós oferecemos uma gama completa de produtos de estilo de vida
              Ayurveda. Você pode encomendar por telefone ou online.
            </p>
            <a href="!#">Comprar</a>
          </div>
        </section>
      </CallToAction>
      <Footer>
        <div className="footer-logos">
          <img src={avp} alt="avp" />
          <img src={scholl} alt="escola" />
        </div>
        <div className="footer-social">
          <a href="!#">
            <FaInstagram />
            Blog Naradeva Shala
          </a>
          <a href="!#">
            <FaYoutube />
            Youtube Naradeva Shala
          </a>
          <a href="!#">
            <FaYoutube />
            Blog Naradeva Shala
          </a>
          <a href="!#">
            <FaInstagram />
            Blog Naradeva Shala
          </a>
        </div>
        <div className="footer-about">
          <a href="!#">Quem somos</a>
          <a href="!#">Termos de Uso</a>
          <a href="!#">Termos de Privacidade</a>
          <a href="!#">Propriedade Intelectual</a>
        </div>
      </Footer>
    </Container>
  );
};

export default Home;
