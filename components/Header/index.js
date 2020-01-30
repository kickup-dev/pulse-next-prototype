import { useState} from 'react';
import styled from 'styled-components';
import MenuToggle from './MenuToggle';
import Profile from './Profile';
import Nav from './Nav';

const Header = styled.header`
  position: fixed;
  display: flex;
  z-index: 4;
  top: 0;
  width: 100vw;
  min-height: 40px;
  background-color: ${({theme}) => theme.colors.white};
  border-bottom: ${({theme}) => `2px solid ${theme.colors.grayLight}`};
  justify-content: space-between;
  align-items: stretch;
  transition: all .1s ease-in-out;
  @media screen and (max-width: 660px) {
    margin-top: -72px;
    height: 74px;
  }
`

const Logo = styled.img`
  width: auto;
  height: 34px;
  align-self: center;
`;


export default ({menuOpen, setMenuOpen}) => {
  return (
    <React.Fragment>
      <Header>
        <MenuToggle onClick={() => setMenuOpen(!menuOpen)}/>
        <Logo src='/static/logo.png' alt="Kickup Logo"/>
        <Profile />
      </Header>
      {
        menuOpen &&
          <Nav>
            I'm a menu.
          </Nav>
      }

    </React.Fragment>
  )
  }