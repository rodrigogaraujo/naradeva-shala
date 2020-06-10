import styled, { css } from "styled-components";

export const Container = styled.ul`
  width: 100%;
  padding: 10px 20px;
  margin-top: 5px;
  border: 1px solid #f1f1f1;

  .content {
    max-width: 1138px;
    width: 100%;
    margin: 0 auto;
    list-style: none;
    display: flex;
    justify-content: center;

    li {
      text-align: center;
      + li {
        margin-left: 16px;
      }
      a {
        font-size: 0.9em;
        text-decoration: none;
        color: black;
      }
    }
    @media screen and (max-width: 920px) {
      display: none;
    }
  }

  .menu-mobile {
    position: absolute;
    top: 50px;
    right: 50px;
    display: none;
    justify-content: flex-end;
    width: 100%;
    max-width: 1138px;
    transition: all 0.3s;
    svg {
      color: var(--primary);
      cursor: pointer;
    }
    @media screen and (max-width: 620px) {
      right: 20px;
      top: 85px;
    }
    @media screen and (max-width: 920px) {
      display: flex;
    }
    .list-menu-mobile {
      @media screen and (max-width: 380px) {
        padding: 10px;
      }
      z-index: 9999;
      background-color: var(--primary);
      position: absolute;
      top: 30px;
      border-radius: 5px;
      list-style: none;
      display: none;
      ${(props) =>
        props.isVisible &&
        css`
          display: flex;
        `}
      flex-direction: column;
      a {
        text-decoration: none;
        color: white;
        font-size: 1.3em;
        &:hover {
          text-decoration: underline;
        }
        @media screen and (max-width: 380px) {
          padding: 10px;
          font-size: 1em;
        }
      }
    }
  }
`;
