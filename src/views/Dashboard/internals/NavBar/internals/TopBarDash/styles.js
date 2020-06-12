import styled, { css } from "styled-components";
import { desaturate } from "polished";

export const Container = styled.div`
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
    position: relative;
  }
  .sub-menu {
    display: none;
    ${(props) =>
      props.isMenuProfile &&
      css`
        display: block;
      `}
    margin-top: 10px;
    position: absolute;
    top: 70px;
    right: 75px;
    padding: 30px;
    background: var(--primary);
    border-radius: 8px;
    ul {
      list-style: none;
      svg {
        color: white;
      }
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;

        &:hover {
          background: ${desaturate(0.3, "#800C20")};
        }
      }
    }
  }
`;
