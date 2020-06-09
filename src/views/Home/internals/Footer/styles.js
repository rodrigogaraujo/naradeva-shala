import styled from "styled-components";

export const Container = styled.footer`
  max-width: 1138px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1164px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 863px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
  .footer-logos {
    flex-basis: 33%;
    margin-top: 40px;
    margin-bottom: 30px;
    text-align: center;
    img + img {
      margin-left: 15px;
    }
    @media screen and (max-width: 863px) {
      flex-basis: 100%;
    }
  }
  .footer-social {
    flex-basis: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 690px) {
      margin-bottom: 20px;
    }
    .align-footer {
      display: flex;
      width: 100%;
      flex-direction: column;
      h1 {
        font-size: 1.2em;
        margin-bottom: 10px;
      }
      svg {
        margin-right: 5px;
      }
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
      }
    }
  }
  .footer-about {
    flex-basis: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .align-footer {
      width: 100%;
      display: flex;
      flex-direction: column;
      a {
        text-decoration: none;
        color: black;
      }
      h1 {
        font-size: 1.2em;
        margin-bottom: 10px;
      }
    }
  }
`;
