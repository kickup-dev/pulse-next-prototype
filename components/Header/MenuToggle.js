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
  padding: ${({theme})=> theme.space[4]}px;
  outline: none;
  cursor: pointer;
`

const IconWrapper = styled.div`
  border: 1px solid ${({theme})=> theme.colors.grayLight};
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({theme})=> theme.space[4]}px;
  color: ${({theme})=> theme.colors.grayMediumDark};
`

const Logo = styled.img`
  width: auto;
  height: 32px;
  align-self: center;
`;

export default ({menuOpen, onClick}) => (
  <MenuToggle onClick={onClick}>
    <IconWrapper>
      <Icon icon={menuOpen ? "chevron-left" : "bars"} style={{fontSize: 14}}/>
    </IconWrapper>  <Logo src='/static/logo.png' alt="Kickup Logo"/>

  </MenuToggle>
)