import styled from 'styled-components';
import {RowProps}  from '../../../interfaces/RowProps.ts'
export const Header = styled.table`
  background: #0d0d0d;
  color: #fff;
  width: 100%;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
`;


export const Column = styled.div<RowProps>`
  flex: 1;
  text-align: ${p => p.textAlign};
  margin: 0 auto;
`;