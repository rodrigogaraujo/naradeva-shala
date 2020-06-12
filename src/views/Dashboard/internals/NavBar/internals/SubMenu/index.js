import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiEdit2, FiList } from "react-icons/fi";

import { Container } from "./styles";

const SubMenu = ({ item, children }) => {
  const [isRotate, setIsRotate] = useState(false);
  return (
    <Container isRotate={isRotate}>
      <Link
        to="#"
        title={item.title}
        onClick={() => {
          setIsRotate(!isRotate);
        }}
      >
        {children}
        {item.title}
        <FiChevronDown size={15} className="arrow rotate" />
      </Link>
      <ul>
        <li>
          <Link to={item.routeCreate} title={item.titleCreate}>
            <FiEdit2 size={15} />
            Novo
          </Link>
        </li>
        <li>
          <Link to={item.routeList} title={item.titleList}>
            <FiList size={15} />
            Listar todos
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default SubMenu;
