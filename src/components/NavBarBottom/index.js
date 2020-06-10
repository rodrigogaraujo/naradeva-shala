import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { Container } from "./styles";
import ListMenu from "./internals/ListMenu";

const NavBarBottom = () => {
  const [visibleMobile, setVisibleMobile] = useState(false);
  const handleVisibleMobile = () => {
    setVisibleMobile(!visibleMobile);
  };
  return (
    <>
      <Container isVisible={visibleMobile}>
        <div className="content">
          <ListMenu />
        </div>
        <div className="menu-mobile">
          {!visibleMobile ? (
            <FiMenu size={30} onClick={handleVisibleMobile} />
          ) : (
            <FiX size={30} onClick={handleVisibleMobile} />
          )}

          <div className="list-menu-mobile">
            <ListMenu />
          </div>
        </div>
      </Container>
    </>
  );
};
export default NavBarBottom;
