import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiEdit, FiSettings } from "react-icons/fi";
import JoditEditor from "jodit-react";

import { Container, Sidebar, TobBarDash, Content } from "./styles";

const Dashboard = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
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
      <TobBarDash></TobBarDash>
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
              <h1>autor</h1>
            </div>
          </div>
        </form>
      </Content>
    </Container>
  );
};

export default Dashboard;
