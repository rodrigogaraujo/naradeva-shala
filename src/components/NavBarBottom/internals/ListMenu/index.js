import React from "react";
import { Link } from "react-router-dom";

const ListMenu = () => {
  return (
    <>
      <li>
        <Link to="/about-us">Quem somos</Link>
      </li>
      <li>
        <a href="!#">Atendimentos e tratamentos</a>
      </li>
      <li>
        <a href="!#">Profissionais</a>
      </li>
      <li>
        <a href="!#">Programação</a>
      </li>
      <li>
        <a href="!#">Cursos</a>
      </li>
      <li>
        <a href="!#">Aula de Yoga</a>
      </li>
      <li>
        <a href="!#">Viagens e Retiros</a>
      </li>
      <li>
        <a href="!#">Artigos</a>
      </li>
      <li>
        <a href="!#">Localização</a>
      </li>
      <li>
        <a href="!#">Fale Conosco</a>
      </li>
    </>
  );
};

export default ListMenu;
