import styled from "styled-components";

export const Container = styled.form`
  border-bottom: 1px solid #dcdcdc;
  .content {
    margin: 0 auto;
    max-width: 1138px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 15px 0;

    h1 {
      font-weight: 500;
      font-size: 1.1em;
      flex-basis: 23%;
    }
    input {
      border: 1px solid #979797;
      flex-basis: 23%;
      padding: 8px;
      + input {
        margin-left: 8px;
      }
    }
    button {
      margin-left: 15px;
      color: white;
      background: var(--button-blue);
      flex-basis: 15%;
      border: 2px solid var(--button-blue);
      padding: 8px;
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
  }
`;
