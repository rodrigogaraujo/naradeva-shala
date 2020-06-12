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
  a {
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
  .settings {
    margin-top: auto;
    margin-bottom: 20px;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 8px;
      width: 100%;
    }
  }
`;
