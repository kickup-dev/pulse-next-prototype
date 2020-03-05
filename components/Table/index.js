import styled from 'styled-components';

const meta = `
  font-size: 13px; //can we pull from theme?
  font-weight: 700;
`

const Table = styled.div`
  font-family: ${({theme}) => theme.fonts.default};
  display: table;
  width: 100%;
  @media screen and (max-width: ${({theme}) => theme.breakpoints[0]}px) {
    display: flex;
  }
`;

const Thead = styled.div`
  display: table-header-group;
  ${meta};
  border-bottom: 1px solid ${({theme})=> theme.colors.grayLight};
  @media screen and (max-width: ${({theme}) => theme.breakpoints[0]}px) {
    display: flex;
  }
`

const Tbody = styled.div`
  display: table-row-group;
  @media screen and (max-width: ${({theme}) => theme.breakpoints[0]}px) {
    display: flex;
  }
`

const Tr = styled.div`
  display: table-row;
  @media screen and (max-width: ${({theme}) => theme.breakpoints[0]}px) {
    display: flex;
  }
`

const Th = styled.div`
  display: table-cell;
  @media screen and (max-width: ${({theme}) => theme.breakpoints[0]}px) {
    display: flex;
  }
`


const Td = styled.div`
  display: table-cell;
  @media screen and (max-width: ${({theme}) => theme.breakpoints[0]}px) {
    display: flex;
  }
`

export { Table, Thead, Tbody, Tr, Th, Td };