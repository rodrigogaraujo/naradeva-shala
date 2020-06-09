import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

import avp from "../../../../assets/avp.png";
import scholl from "../../../../assets/escola.png";

import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      <div className="footer-logos">
        <img src={scholl} alt="escola" />
        <img src={avp} alt="avp" />
      </div>
      <div className="footer-social">
        <div className="align-footer">
          <h1>REDES SOCIAIS</h1>
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
      </div>
      <div className="footer-about">
        <div className="align-footer">
          <h1>Quem somos</h1>
          <a href="!#">Quem somos</a>
          <a href="!#">Termos de Uso</a>
          <a href="!#">Termos de Privacidade</a>
          <a href="!#">Propriedade Intelectual</a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
