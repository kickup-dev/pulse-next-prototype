import  { useState } from 'react';
import styled from 'styled-components';
import Body from './Body';
import Header from './Header';

const Wrapper = styled.div`
  width: 1140px;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({menuOpen}) => menuOpen ? '250px' : '0'};
`

export default ({children}) => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <Body>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Wrapper menuOpen={menuOpen}>
        {children}
      </Wrapper>
    </Body>
  )
}