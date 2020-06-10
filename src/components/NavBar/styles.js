import styled from "styled-components";

import bg from "../../assets/bgHeader.png";

export const Container = styled.div`
  z-index: 9998;
  .content {
    max-width: 1138px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: contain;
    height: 160px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 380px) {
      img {
        max-width: 85%;
        margin-top: 15px;
      }
    }
    a {
      align-self: center;
    }
    .menu-options {
      align-self: flex-end;
      display: flex;
      margin-right: 30px;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: black;
        svg {
          color: var(--icons-color);
          margin-bottom: 8px;
        }
        + a {
          margin-left: 16px;
        }
      }
    }

    @media screen and (max-width: 1033px) {
      justify-content: center;
      align-items: center;
      height: 220px;
      padding: 20px;
      text-align: center;
      img {
        padding-left: 0;
      }
      .menu-options {
        margin-top: 24px;
        margin-right: 0;
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
