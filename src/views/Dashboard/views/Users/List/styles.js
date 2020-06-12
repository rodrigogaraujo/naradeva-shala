import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
  max-width: calc(100% - 280px);
  margin-left: 280px;
  padding: 50px;
  width: 100%;
  table {
    margin: 0 40px;
    border-collapse: collapse;
    padding: 20px;
    width: calc(100% - 80px);
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    .larger {
      width: 250px;
    }

    td,
    th {
      border: 1px solid #ddd;
      padding: 8px;
      svg {
        cursor: pointer;
      }
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    tr:hover {
      background-color: #ddd;
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      color: #fff;
      background-color: var(--primary);
      color: white;
    }
  }
`;
