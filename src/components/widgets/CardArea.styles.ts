import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 33%; 
  margin: 0 auto; 
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  border-bottom: 3px solid black;
`;

export const TH = styled.th`
    padding: 5px 10px;
`;

export const TD = styled.td`
  padding: 5px 10px;
`;

export const TR = styled.tr`
  &:nth-of-type(2n) {
    background-color: #ddd;
  }
`;