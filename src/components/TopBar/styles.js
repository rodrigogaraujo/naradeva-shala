import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: var(--primary);
  color: white;
  position: relative;
  .content {
    max-width: 1138px;
    height: 45px;
    margin: 0 auto;
    display: flex;
    width: calc(100% - 40px);
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;

    @media screen and (max-width: 550px) {
      justify-content: center;
      height: 80px;
      .contact {
        flex-basis: 100%;
        justify-content: center;
      }
    }

    .contact {
      display: flex;
      span {
        display: flex;
        align-items: center;
        svg {
          margin-right: 4px;
        }
        + span {
          margin-left: 16px;
        }
      }
    }

    .social-buttons {
      display: flex;
      align-content: flex-end;
      a {
        color: white;
      }
      a + a {
        margin-left: 8px;
      }
    }
  }
`;
