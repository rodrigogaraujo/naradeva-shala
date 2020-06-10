import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiEdit, FiSettings, FiEdit3, FiUser } from "react-icons/fi";

import img from "../../../../assets/nutricao.jpg";

import { Container, Sidebar, TobBarDash } from "./styles";

const NavBar = () => {
  return (
    <Container>
      <Sidebar>
        <div className="logo">
          <span>Naradeva Shala</span>
        </div>
        <Link to="/dashboard" title="Dashboard">
          <FiHome size={25} />
          Dashboard
        </Link>
        <Link to="/dashboard/pages" title="Páginas">
          <FiEdit size={25} />
          Páginas
        </Link>
        <Link to="/dashboard/posts" title="Posts">
          <FiEdit3 size={25} />
          Posts
        </Link>
        <Link to="/dashboard/users" title="Usuários">
          <FiUser size={25} />
          Usuários
        </Link>
        <Link to="/dashboard" title="Configurações" className="settings">
          <FiSettings size={25} />
          Configurações
        </Link>
      </Sidebar>
      <TobBarDash>
        {/* <FiBell size={25} /> */}
        <img src={img} alt="Nutrição" />
      </TobBarDash>
    </Container>
  );
};

export default NavBar;
