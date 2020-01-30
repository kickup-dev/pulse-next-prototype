import styled, {keyframes} from 'styled-components';
import MenuItem from './MenuItem.js';

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
  box-sizing: border-box;
  z-index: 1;
  top: 74px;
  min-height: 100vh;
  min-width: 250px;
  padding: ${({theme}) => theme.space[2]}px;
  overflow: scroll;
  background: ${({theme}) => theme.colors.grayLight};
  border-right: ${({theme}) => `1px solid ${theme.colors.grayLight}`};
  /* animation: ${slideIn} .1s linear; */
`
var structure = [
  {
    title: "Home",
    icon: "home",
    match: "/$",
    href: "/"
  },
  {
    title: "Reports",
    icon: "file-alt",
    match: "/reports",
    href: "/reports",
  },
  {
    title: "Browse",
    icon: "search",
    match: "/reports/browse",
    href: "/reports/browse",
  },
  {
    title: "Events",
    icon: "calendar",
    match: "/events",
    href: "/events"
  },
  {
    title: "Walkthroughs",
    icon: "clipboard-list",
    match: "/walkthroughs",
    href: "/walkthroughs"
  },
  {
    title: "Microcredentials",
    icon: "medal",
    match: "/microcredentials",
    href: "/microcredentials"
  },
];


export default ({children}) => (
  <Nav>
      {
        structure.map((page, i) => {
          return <MenuItem
            key={i}
            icon={page.icon}
            href={page.href}
            match={page.match}
          >{page.title}
          </MenuItem>
        })
      }
  </Nav>
)