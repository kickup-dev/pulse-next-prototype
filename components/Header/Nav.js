import styled, {keyframes} from 'styled-components';
import menu from '../../menu.js'

import { Menu } from '../../componentLibrary/menu';

const slideIn = keyframes`
  from {
    transform: translateX(-300px);
  }

  to {
    transform: translateX(0px);
  }
`;

const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  top: 62px;
  min-height: 100vh;
  min-width: 250px;
  overflow: scroll;
  background: ${({theme}) => theme.colors.white};
  border-right: ${({theme}) => `2px solid ${theme.colors.grayLight}`};
  animation: ${slideIn} .1s linear;
`
const NavMenu = styled(Menu)`
  box-shadow: none;
  border: none;
  a { text-decoration: none; }
`

export default ({children}) => (
  <Nav>
    <NavMenu>
      {
        menu.pages.map(page => <Menu.Item icon={page.icon} href={page.path}>{page.name}</Menu.Item>)
      }
    </NavMenu>
  </Nav>
)