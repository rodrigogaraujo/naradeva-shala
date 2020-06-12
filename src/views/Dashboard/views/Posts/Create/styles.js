import styled from "styled-components";
import { desaturate, shade } from "polished";

export const Container = styled.div``;
export const Content = styled.div`
  max-width: calc(100% - 280px);
  margin-left: 280px;
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
    margin-top: 30px;
    display: flex;
    .form-left-side-body {
      flex-basis: 70%;
    }
    .form-right-side-body {
      flex-basis: 30%;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      .author-picture {
        display: flex;
        align-items: center;
        color: var(--button-gary-light);
        font-size: 0.7em;
        margin-bottom: 16px;
        padding: 10px 15px;
        border: 1px solid var(--border-color);
        .picture {
          background: #ccc;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          margin-right: 8px;
        }
      }
      span {
        font-size: 1.3em;
        font-weight: 600;
        color: var(--button-gary-light);
      }
      input {
        padding: 10px 15px;
        border: 1px solid var(--border-color);
        margin: 0 10px 10px 0;
        border-radius: 5px;
        font-size: 1.2em;
      }
    }
  }
`;
