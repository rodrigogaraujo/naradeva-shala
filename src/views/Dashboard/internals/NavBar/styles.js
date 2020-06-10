import styled from "styled-components";
import { desaturate } from "polished";

export const Container = styled.div``;
export const Sidebar = styled.div`
  max-width: 280px;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--primary);

  .settings {
    margin-top: auto;
    margin-bottom: 20px;
  }

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
  max-width: calc(100% - 280px);
  margin-left: 280px;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg {
    margin-right: 10px;
    color: var(--button-gary-light);
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
    max-height: 60px;
    max-width: 60px;
    border-radius: 50%;
    margin-right: 80px;
    cursor: pointer;
  }
`;
