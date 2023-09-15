import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TD = styled.td`
  padding: 10px 30px;
`;

export const TR = styled.tr`
  &:nth-of-type(2n) {
    background-color: #ddd;
  }
`;

export const THead = styled.thead`
  border-bottom: 3px solid black;
`;
