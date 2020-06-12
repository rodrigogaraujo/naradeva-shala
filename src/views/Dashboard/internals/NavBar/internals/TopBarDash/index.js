import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiLogOut, FiSettings } from "react-icons/fi";

import img from "../../../../../../assets/nutricao.jpg";

import { Container } from "./styles";
const TopBarDash = () => {
  const [menuProfile, setMenuProfile] = useState(false);
  const handleMenuProfile = () => {
    setMenuProfile(!menuProfile);
  };
  return (
    <Container isMenuProfile={menuProfile}>
      {/* <FiBell size={25} /> */}
      <img src={img} alt="Nutrição" onClick={handleMenuProfile} />
      <div className="sub-menu">
        <ul>
          <li>
            <Link to="#">
              <FiUser size={20} />
              Perfil
            </Link>
          </li>
          <li>
            <Link to="#">
              <FiSettings size={20} />
              Configurações
            </Link>
          </li>
          <li>
            <Link to="#">
              <FiLogOut size={20} />
              Sair
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default TopBarDash;
