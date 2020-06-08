import React from "react";
import { FaHome, FaPlay, FaCalendar } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

import logo from "../../../../assets/logo.png";
import { Container } from "./styles";

const NavBar = () => {
  return (
    <Container>
      <div className="content">
        <img src={logo} alt="Naradeva Shala" />
        <div className="menu-options">
          <a href="!#">
            <FaHome size={35} />
            Cursos Presenciais
          </a>
          <a href="!#">
            <RiGlobalLine size={35} />
            Cursos Online
          </a>
          <a href="!#">
            <FaPlay size={35} />
            Vídeos
          </a>
          <a href="!#">
            <FaCalendar size={35} />
            Calendário
          </a>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
