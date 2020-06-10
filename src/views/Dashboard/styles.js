import styled from "styled-components";
import { desaturate, shade } from "polished";

export const Container = styled.div``;
export const Sidebar = styled.div`
  max-width: 350px;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--primary);

  .logo {
    display: flex;
    max-height: 80px;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: ${desaturate(0.3, "#800C20")};
    span {
      color: white;
      font-size: 1.3em;
      font-weight: 500;
    }
  }
  a {
    margin-top: 8px;
    display: flex;
    align-items: center;
    color: white;
    padding: 20px 25px;
    text-decoration: none;
    font-size: 1.2em;
    width: 90%;
    border-radius: 8px;
    align-self: center;
    transition: background-color 0.4s;
    svg {
      margin-right: 16px;
    }
    &:hover {
      background: ${desaturate(0.3, "#800C20")};
    }
  }
`;
export const TobBarDash = styled.div`
  width: 100%;
  max-width: calc(100% - 350px);
  margin-left: 350px;
  height: 80px;
  background: #eee;
`;
export const Content = styled.div`
  max-width: calc(100% - 350px);
  margin-left: 350px;
  padding: 50px;

  .form-header {
    width: 100%;
    input {
      width: 75%;
      padding: 10px 15px;
      border: 1px solid var(--border-color);
      margin: 0 10px 10px 0;
      border-radius: 5px;
      font-size: 1.2em;
    }
    button {
      border-radius: 5px;
      padding: 10px 15px;
      font-size: 1.2em;
    }
    .preview {
      border: 1px solid var(--border-color-second);
      background: white;
      color: var(--button-gary-light);
      transition: all 0.4s;
      &:hover {
        background: ${shade(0.3, "#fff")};
        color: white;
      }
    }
    .save {
      border: 1px solid var(--primary);
      background: var(--primary);
      color: white;
      margin-left: 10px;
      transition: background-color 0.4s;
      &:hover {
        background: ${desaturate(0.3, "#800C20")};
      }
    }
  }

  .form-body {
    display: flex;
    .form-left-side-body {
      flex-basis: 70%;
    }
    .form-right-side-body {
      flex-basis: 30%;
    }
  }
`;
