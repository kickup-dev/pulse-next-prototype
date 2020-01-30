import { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Avatar, Icon } from '../../componentLibrary/icon';
import { Heading, Meta } from '../../componentLibrary/text';
import { Menu } from '../../componentLibrary/menu';
import { Button } from '../../componentLibrary/button';

import chroma from 'chroma-js';

const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-left: 1px solid ${({theme})=> theme.colors.grayLight};
  padding: ${({theme})=> theme.space[3]}px;
`
const UserDetails = styled.div`
  margin-left: ${({theme})=> theme.space[2]}px;
`

const ProfileInner = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`
const TRANSITION_NAME = 'menu-transition';
const TRANSITION_TIMEOUT = 100;

const getEnterTimeout = ({ timeout }) => (
  typeof timeout === 'object' ? timeout.enter : TRANSITION_TIMEOUT
);

const getExitTimeout = ({ timeout }) => (
  typeof timeout === 'object' ? timeout.exit : TRANSITION_TIMEOUT
);

const UserMenu = styled.div`
  list-style: none;
  position: absolute;
  width: 200px;
  right: 5px; //find right space
  top: calc(100% + 10px);
  background: white;
  box-shadow: ${({theme})=> `0 4px 20px ${chroma(theme.colors.grayDark).alpha(.2).css()}`} ; ;
  border-radius: 4px;
  //

  transition: opacity ${getEnterTimeout}ms linear, transform ${getEnterTimeout}ms ease-in-out;

  &.${TRANSITION_NAME}-enter {
    opacity: 0.01;
    transform: translateY(10px);
  }

  &.${TRANSITION_NAME}-enter-active {
    opacity: 1;
    transform: translateY(0);
  }

  &.${TRANSITION_NAME}-exit {
    opacity: 1;
    transition: opacity ${getExitTimeout}ms linear, transform ${getExitTimeout}ms ease-in-out;
    transform: translateY(0);
  }

  &.${TRANSITION_NAME}-exit-active {
    opacity: 0.01;
    transform: translateY(10px);
  }

  &.${TRANSITION_NAME}-exit-done {
    display: none;
  }
`
const UserMenuItem = styled(Menu.Item)`
  padding-left: ${({theme})=> theme.space[4]}px;
  padding-right: ${({theme})=> theme.space[4]}px;
`
const UserMenuButton = styled.div`
  padding: ${({theme})=> theme.space[4]}px;
`


export default () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Profile p={4}>
      <ProfileInner onClick={() => setMenuOpen(!menuOpen)}>
        <Avatar size="lg" src="https://i.pravatar.cc/42?img=63"/>
        <UserDetails>
          <Heading mb={2}size={'sm'}>User Name</Heading>
          <Meta ml={1}>Sample District</Meta>
        </UserDetails>
        <Icon padding={3} icon={menuOpen ? "chevron-up" : "chevron-down"} style={{fontSize: 14}}/>
      </ProfileInner>
      <CSSTransition
        classNames={TRANSITION_NAME}
        in={menuOpen}
        mountOnEnter
        timeout={TRANSITION_TIMEOUT}
      >
        <UserMenu>
          <UserMenuButton><Button block>Do Something</Button></UserMenuButton>
          <UserMenuItem icon="user">Account</UserMenuItem>
          <UserMenuItem icon="building">Switch District</UserMenuItem>
          <UserMenuItem icon="sign-out">Logout</UserMenuItem>
        </UserMenu>
      </CSSTransition>
    </Profile>
  )
}