import styled from "styled-components";

export const Container = styled.li`
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  max-width: 230px;
  text-align: center;
  margin: 0 0 20px 0;
  + li {
    margin-left: 20px;
  }
  img {
    max-width: 230px;
  }
  h1 {
    padding: 5px 10px;
    font-weight: 500;
    font-size: 1.2em;
  }
  p {
    padding: 5px 10px 15px;
  }
`;
