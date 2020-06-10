import styled from "styled-components";

import bg from "../../../../assets/banner-item-one.png";

export const Container = styled.div`
  max-width: 1138px;
  width: 100%;
  margin: 0 auto;
  .top-action {
    width: 100%;
    background: url(${bg}) no-repeat;
    background-size: 1138px 450px;
    height: 366px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .content-action {
      padding: 50px 150px 0 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 29px;
      }
      a {
        color: white;
        text-decoration: none;
        background: var(--button-orange);
        padding: 15px 60px;
        border-radius: 5px;
        max-width: 312px;
        font-size: 23px;
        margin-top: 20px;
      }
      @media screen and (max-width: 720px) {
        padding: 120px 0 0 0;
        align-self: center;
      }
    }
  }
  .bottom-action {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .store {
      flex-basis: 50%;
      display: flex;
      .img {
        width: 184px;
        height: 181px;
        border-radius: 50%;
        background: #979797;
      }
      @media screen and (max-width: 1000px) {
        flex-basis: 100%;
        margin: 20px 0 0 20px;
        justify-content: center;
        align-items: center;

        .img {
          width: 164px;
          height: 161px;
        }
      }
      .content-store {
        max-width: 306px;
        margin-left: 33px;
        h1 {
          font-size: 44px;
          color: var(--font-color);
          margin-bottom: 10px;
        }
        p {
          margin-bottom: 15px;
          font-size: 13px;
        }
        a {
          color: white;
          text-decoration: none;
          background: var(--button-orange);
          padding: 5px 30px;
          border-radius: 5px;
          max-width: 312px;
          font-size: 18px;
          margin-top: 20px;
        }
      }
    }

    @media screen and (max-width: 380px) {
      .store {
        flex-direction: column;
        text-align: center;
        margin: 10px 0;
        .content-store {
          margin-left: 0;
        }
      }
    }
  }
`;
