import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../componentLibrary/ThemeProvider';

const sizeLookup = {
    sm: '16px',
    md: '20px',
    lg: '24px'
}

const Count = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.color};
    border-radius: 100%;
    font-size: 12px;
    font-family: ${({theme}) => theme.fonts.default};
    color: white;
    height: ${(props) => sizeLookup[props.size]};
    width: ${(props) => sizeLookup[props.size]};
`;

export default Count;

Count.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string
}

Count.defaultProps = {
    color: theme.colors.red,
    size: 'md'
}