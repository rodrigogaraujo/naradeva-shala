import styled from "styled-components";
import { desaturate } from "polished";

export const Container = styled.div``;
export const Content = styled.div`
  max-width: calc(100% - 280px);
  margin-left: 280px;
  padding: 50px;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .save {
      border: 1px solid var(--primary);
      background: var(--primary);
      color: white;
      margin-left: 10px;
      transition: background-color 0.4s;
      max-width: 180px;
      &:hover {
        background: ${desaturate(0.3, "#800C20")};
      }
    }
  }
`;
