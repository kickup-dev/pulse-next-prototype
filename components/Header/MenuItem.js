import { Icon } from '../../componentLibrary/icon';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import tokens from '@kickup/pulse-style-tokens/';

const {colors} = tokens;

const MenuItem = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    border-radius: 4px;
    ${({child}) => child ? `margin-left: 32px;` : ``}
    
    color: ${colors.grayDark};
    text-decoration: none;
    font-family: "Nunito Sans", "Helvetica", sans-serif;
    
    font-size: 14px;

    cursor: pointer;

    ${({active}) => active ? `
        background: rgba(0,0,0,.1);
        font-weight: 800;
    ` : ``};

    &:hover {
        background: rgba(0,0,0,.1);
    }
`;

const MenuLabel = styled.p`
    margin-left: 8px;
`;

export default (props) => {
    const router = useRouter();
    const re = new RegExp(props.match);
    let isActive = router.pathname.match(re);
    
    return (
        <MenuItem active={isActive} href={props.href} child={props.child}>
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