import styled, { css } from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8px;
  width: 100%;
  z-index: 99999;
  .arrow {
    position: absolute;
    right: 10px;
  }
  .rotate {
    ${(props) =>
      props.isRotate &&
      css`
        transform: rotate(-180deg);
      `}
  }
  ul {
    flex-direction: column;
    display: none;
    ${(props) =>
      props.isRotate &&
      css`
        display: flex;
      `}
    li {
      margin: 0;
    }
    a {
      display: flex;
      align-items: center;
      color: white;
      padding: 10px 10px 10px 60px;
    }
  }
`;
