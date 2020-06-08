import styled from "styled-components";

import bg from "../../../../assets/bgHeader.png";

export const Container = styled.div`
  .content {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    background-image: url(${bg});
    height: 160px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      align-self: center;
      padding-left: 30px;
    }
    .menu-options {
      align-self: flex-end;
      display: flex;
      margin-right: 30px;
      a {
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: black;
        svg {
          color: var(--primary);
          margin-bottom: 8px;
        }
        + a {
          margin-left: 16px;
        }
      }
    }

    @media screen and (max-width: 910px) {
      justify-content: center;
      height: 220px;
      padding: 20px;
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
