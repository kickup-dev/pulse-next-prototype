import { Icon } from '../../componentLibrary/icon';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MenuItem = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 8px;
    border-radius: 4px;
    margin-bottom: 2px;
    ${({child}) => child ? `margin-left: 32px;` : ``}

    color: ${({ theme, active }) => active ? theme.colors.grayDark : "#55666F"};
    text-decoration: none;
    font-family: "Nunito Sans", "Helvetica", sans-serif;
    font-size: 16px;
    transition-duration: .1s;

    cursor: pointer;

    font-weight: ${({active}) => active ? "800" : "initial"};
    background: ${({active, hasChildren, redirectsToChild}) => {
        if (active && !hasChildren) {
            return "#D9E0E3";
        } else if (active && !redirectsToChild) { // if it has it's own top level landing page
            return "#D9E0E3";
        } else {
            return "initial";
        }
    }};

    &:hover {
        background: #D9E0E3;
        background: rgba(217,224,227,.5);
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
        <Link href={props.href}>
            <MenuItem
                active={isActive}
                {...props}
                redirectsToChild={props.redirectsToChild == null ? false : props.redirectsToChild}
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
        </Link>
  )
};