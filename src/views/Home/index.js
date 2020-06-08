import React from "react";

import { FaYoutube, FaInstagram } from "react-icons/fa";

import { CallToAction, BannerTwo, Footer, Container } from "./styles";
import avp from "../../assets/avp.png";
import scholl from "../../assets/escola.png";

import TopBar from "./internals/TopBar";
import NavBar from "./internals/NavBar";
import NavBarBottom from "./internals/NavBarBottom";
import Banner from "./internals/Banner";
import Newsletter from "./internals/Newsletter";
import Blog from "./internals/Blog";

const Home = () => {
  return (
    <Container>
      <TopBar />
      <NavBar />
      <NavBarBottom />
      <Banner title="Bem-vindo ao Instituto de Cultura Hindu Naradeva Shala" />
      <Newsletter />
      <Blog />
      <BannerTwo>
        <h1>Banner de curso</h1>
      </BannerTwo>
      <Blog />
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
