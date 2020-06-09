import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  padding: 20px 20px;
  @media screen and (max-width: 1000px) {
    display: none;
  }

  .content {
    max-width: 1100px;
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
  }
`;
