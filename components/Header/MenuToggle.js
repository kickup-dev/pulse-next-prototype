import styled from 'styled-components';
import { Icon } from '../../componentLibrary/icon';

const MenuToggle = styled.button`
  display: flex;
  height: 100%;
  min-height: 62px;
  min-width: 250px;
  border: none;
  align-items: center;
  border-right: 1px solid ${({theme})=> theme.colors.grayLight};
  padding: ${({theme})=> theme.space[5]}px;
  outline: none;
  cursor: pointer;
`

const Logo = styled.img`
  width: auto;
  height: 34px;
  align-self: center;
`;

export default ({menuOpen, onClick}) => (
  <MenuToggle onClick={onClick}>
  <Icon icon={menuOpen ? "chevron-left" : "bars"}/>  <Logo src='/static/logo.png' alt="Kickup Logo"/>

  </MenuToggle>
)