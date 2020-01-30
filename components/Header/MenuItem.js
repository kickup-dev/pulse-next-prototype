import { Icon } from '../../componentLibrary/icon';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import tokens from '@kickup/pulse-style-tokens/';

const {colors} = tokens;

const MenuItem = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    border-radius: 4px;
    margin-bottom: 2px;
    ${({child}) => child ? `margin-left: 32px;` : ``}
    
    color: ${colors.grayDark};
    text-decoration: none;
    font-family: "Nunito Sans", "Helvetica", sans-serif;
    font-size: 14px;
    transition-duration: .1s;
    
    cursor: pointer;

    font-weight: ${({active}) => active ? "800" : "initial"};
    background: ${({hasChildren, active}) => !hasChildren && active ? "#D9E0E3" : "initial"};

    &:hover {
        background: #D9E0E3;
        transition-duration: 0s;
    }
`;

const MenuLabel = styled.p`
    margin-left: 8px;
`;

export default (props) => {
    const router = useRouter();
    const re = new RegExp(props.match);
    let isActive = re.test(router.pathname);
    
    return (
        <MenuItem
            active={isActive}
            {...props}
            >
            <Icon
                icon={props.icon}
                iconWeight={isActive ? "solid" : "regular"}
                css={`
                width: 20px;
                text-align: center;
            `}/>
            <MenuLabel>{props.children}</MenuLabel>
        </MenuItem>
  )
};