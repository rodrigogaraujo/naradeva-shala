import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiEdit, FiSettings, FiBell } from "react-icons/fi";
import JoditEditor from "jodit-react";

import { Container, Sidebar, TobBarDash, Content } from "./styles";
import img from "../../assets/nutricao.jpg";

const Dashboard = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false,
  };

  const handlePreview = () => {};

  return (
    <Container>
      <Sidebar>
        <div className="logo">
          <span>Naradeva Shala</span>
        </div>
        <Link to="/dashboard" title="Dashboard">
          <FiHome size={30} />
          Dashboard
        </Link>
        <Link to="/dashboard" title="Páginas">
          <FiEdit size={30} />
          Páginas
        </Link>

        <Link to="/dashboard" title="Configurações" className="settings">
          <FiSettings size={30} />
          Configurações
        </Link>
      </Sidebar>
      <TobBarDash>
        <FiBell size={25} />
        <img src={img} alt="Nutrição" />
      </TobBarDash>
      <Content>
        <form>
          <div className="form-header">
            <input placeholder="Título da página" />
            <button onClick={handlePreview} className="preview">
              Preview
            </button>
            <button type="submit" className="save">
              Salvar
            </button>
          </div>
          <div className="form-body">
            <div className="form-left-side-body">
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
              />
            </div>
            <div className="form-right-side-body">
              <span>Autor</span>
              <div className="author-picture">
                <div className="picture"></div>
                <h2>David Clarke</h2>
              </div>
              <span>Categoria</span>
              <input placeholder="Categoria" />
              <span>Tag</span>
              <input placeholder="Tags" />
              <div className="public">
                <span>Público</span>
              </div>
            </div>
          </div>
        </form>
      </Content>
    </Container>
  );
};

export default Dashboard;
