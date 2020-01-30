import { Fragment, useState } from 'react';
import styled, {keyframes} from 'styled-components';
import { useRouter } from 'next/router';
import MenuItem from './MenuItem.js';
import structure from './structure.js';

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
  padding: ${({theme}) => theme.space[3]}px;
  overflow: scroll;
  background: ${({theme}) => theme.colors.grayLight};
  background: #F0F3F5;
  border-right: ${({theme}) => `1px solid ${theme.colors.grayLight}`};
  /* animation: ${slideIn} .1s linear; */
`

const ChildrenContainer = styled.div`
  height: ${({open}) => open ? "initial" : "0px"};
  overflow: hidden;
`;

const CollapsableMenuItem = (props) => {
  var [open, setOpen] = useState(false);
  let {page} = props;

  const router = useRouter();
  const re = new RegExp(page.match);
  let isActive = re.test(router.pathname);
  
  return (
    <Fragment>
       <MenuItem
          hasChildren={true}
          key={props.key}
          icon={page.icon}
          href={page.href}
          match={page.match}
          onClick={() => setOpen(!open)}
        >{page.title}
      </MenuItem>
      <ChildrenContainer open={isActive}>
        {
          props.childrenNav.map((page, i) => {
            return <MenuItem
                key={i}
                child={true}
                icon={page.icon}
                href={page.href}
                match={page.match}
              >{page.title}
            </MenuItem>
          })
        }
      </ChildrenContainer>
    </Fragment>
  )
}

export default ({children}) => (
  <Nav>
      {
        structure.map((page, i) => {
          if (page.children) {
            return <CollapsableMenuItem key={i} page={page} childrenNav={page.children} />
          } else {
            return <MenuItem
              key={i}
              icon={page.icon}
              href={page.href}
              match={page.match}
            >{page.title}
            </MenuItem>
          }
        })
      }
  </Nav>
)