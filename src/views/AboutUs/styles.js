import styled from "styled-components";

export const Container = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto 40px auto;
  display: flex;
  flex-direction: column;
  text-align: justify;
  h1 {
    color: var(--font-title);
  }
  h2 {
    color: var(--font-sub-title);
    margin-top: 20px;
    font-size: 1.2em;
  }
  p {
    color: var(--font-text);
  }
  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    img {
      margin: 20px 0;
      width: 100%;
      max-width: 500px;
      border-radius: 3px;
    }
  }
`;
