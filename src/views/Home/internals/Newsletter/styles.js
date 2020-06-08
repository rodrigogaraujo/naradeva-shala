import styled from "styled-components";

export const Container = styled.form`
  margin: 0 auto;
  max-width: 1100px;
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 500;
    font-size: 1.1em;
    flex-basis: 23%;
  }
  input {
    border: 2px solid #ccc;
    flex-basis: 23%;
    padding: 8px;
    border-radius: 3px;
    + input {
      margin-left: 5px;
    }
  }
  button {
    margin-left: 5px;
    color: white;
    background: var(--button-blue);
    flex-basis: 15%;
    border: 2px solid var(--button-blue);
    padding: 8px;
    border-radius: 3px;
  }
  @media screen and (max-width: 700px) {
    h1 {
      flex-basis: 100%;
      text-align: center;
      margin: 0 20px 8px 20px;
    }
    input {
      flex-basis: 100%;
      margin: 0 20px;
      + input {
        margin: 8px 20px;
      }
    }
    button {
      flex-basis: 100%;
      margin: 0 20px 8px 20px;
    }
  }
`;
