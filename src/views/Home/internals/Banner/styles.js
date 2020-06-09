import styled from "styled-components";

import bg from "../../../../assets/bgBanner.png";

export const Container = styled.div`
  background-image: url(${bg});
  height: 280px;
  h1 {
    max-width: 700px;
    margin: 0 auto;
    padding: 80px 20px 0 20px;
    font-weight: 500;
    color: var(--font-color);
    text-align: center;
  }
`;
