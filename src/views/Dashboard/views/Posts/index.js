import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

import { Container, Content } from "./styles";
import NavBar from "../../internals/NavBar";

const Dashboard = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false,
  };

  const handlePreview = () => {};

  return (
    <Container>
      <NavBar />
      <Content>
        <form>
          <div className="form-header">
            <input placeholder="Título do Post" />
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