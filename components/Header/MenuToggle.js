import styled from 'styled-components';
import { Icon } from '../../componentLibrary/icon';
import { Meta } from '../../componentLibrary/text';

const MenuToggle = styled.button`
  display: flex;
  height: 100%;
  min-height: 62px;
  border: none;
  align-items: center;
  border-right: 1px solid ${({theme})=> theme.colors.grayLight};
  padding: ${({theme})=> theme.space[5]}px;
  outline: none;
  cursor: pointer;
`

export default ({onClick}) => (
  <MenuToggle onClick={onClick}>
    <Meta mr={2}>Menu</Meta> <Icon icon="bars"/>
  </MenuToggle>
)