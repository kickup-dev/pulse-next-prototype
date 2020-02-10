import styled from 'styled-components';
import MenuToggle from './MenuToggle';
import Profile from './Profile';
import Search from './Search';
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




export default ({menuOpen, setMenuOpen}) => {
  return (
    <React.Fragment>
      <Header>
        <MenuToggle menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}/>
        <Search />
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