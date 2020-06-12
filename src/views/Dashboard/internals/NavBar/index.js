import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiEdit, FiSettings, FiEdit3, FiUser } from "react-icons/fi";

import { Container, Sidebar } from "./styles";
import SubMenu from "./internals/SubMenu";
import TopBarDash from "./internals/TopBarDash";

const NavBar = () => {
  const [postMenu, setPostMenu] = useState({});
  const [userMenu, setUserMenu] = useState({});
  useEffect(() => {
    setPostMenu({
      title: "Posts",
      routeCreate: "/dashboard/create-post",
      routeList: "/dashboard/posts",
      titleCreate: "Criar novo Post",
      titleList: "Lista de Posts",
    });
    setUserMenu({
      title: "Usuários",
      routeCreate: "/dashboard/create-user",
      routeList: "/dashboard/users",
      titleCreate: "Criar novo Usuário",
      titleList: "Lista de Usuários",
    });
  }, [setPostMenu, setUserMenu]);
  return (
    <Container>
      <Sidebar>
        <div className="logo">
          <span>Naradeva Shala</span>
        </div>
        <ul>
          <li>
            <Link to="/dashboard" title="Dashboard">
              <FiHome size={25} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/pages" title="Páginas">
              <FiEdit size={25} />
              Páginas
            </Link>
          </li>
          <SubMenu item={postMenu}>
            <FiEdit3 size={25} />
          </SubMenu>
          <SubMenu item={userMenu}>
            <FiUser size={25} />
          </SubMenu>
        </ul>
        <Link to="/dashboard" title="Configurações" className="settings">
          <FiSettings size={25} />
          Configurações
        </Link>
      </Sidebar>
      <TopBarDash />
    </Container>
  );
};

export default NavBar;
