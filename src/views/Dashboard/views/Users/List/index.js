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
              <th>Nome</th>
              <th>email</th>
              <th className="larger">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rodrigo Gomes Araújo</td>
              <td>rodrigoaraujo990@gmail.com</td>
              <td>
                <FiEdit /> <FiTrash />
              </td>
            </tr>
            <tr>
              <td>Rodrigo Gomes Araújo</td>
              <td>rodrigoaraujo990@gmail.com</td>
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
