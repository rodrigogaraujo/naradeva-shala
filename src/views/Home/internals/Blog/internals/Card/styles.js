import styled from "styled-components";

export const Container = styled.li`
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  max-width: 272px;
  text-align: center;
  margin: 20px 0px;
  justify-content: space-between;

  @media screen and (max-width: 1150px) {
    flex-basis: 50%;
    max-width: 40%;
    justify-content: space-between;
    + li {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 272px;
    justify-content: space-between;
    + li {
      margin-left: 0;
    }
  }

  + li {
    margin-left: 15px;
  }

  img {
    max-width: 272px;
  }
  h1 {
    padding: 5px 10px;
    font-weight: 400;
    font-size: 16px;
  }
  p {
    padding: 5px 10px 15px;
    text-align: justify;
    font-size: 15px;
  }
`;
