import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

import { Container, Content } from "./styles";
import NavBar from "../../../internals/NavBar";
const List = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th className="larger">Data</th>
              <th className="larger">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Titulo</td>
              <td>27/02/2020 12h22</td>
              <td>
                <FiEdit /> <FiTrash />
              </td>
            </tr>
            <tr>
              <td>Titulo</td>
              <td>27/02/2020 12h22</td>
              <td>
                <FiEdit /> <FiTrash />
              </td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Container>
  );
};

export default List;
