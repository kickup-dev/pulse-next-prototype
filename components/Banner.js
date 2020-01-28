import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { Transition } from 'react-transition-group';

import styled from 'styled-components';
import { Box } from 'rebass';
import Icon from '../componentLibrary/icon/Icon';
import Paragraph from '../componentLibrary/text/Paragraph';
import Heading from '../componentLibrary/text/Heading';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border: ${({theme}) => theme.colors.grayLight} 1px solid;
    border-radius: 4px;
    padding: ${({theme}) => theme.space[5]}px;
    margin-bottom: ${({theme}) => theme.space[5]}px;
    opacity: ${({ state }) => (state === "entering" ? 0 : 1)};
    transform: scale(
        ${({ state }) => (state === "entering" ?  .8: 1)}
    );
    max-height: ${({ state }) => (state === "entered" ? '0px' : '100%')};
    transition: all .1s ease-in;
`

const CloseIcon = styled(Icon)`
    position: absolute;
    top: ${({theme}) => theme.space[3]}px;
    right: ${({theme}) => theme.space[3]}px;
    cursor: pointer;
`;

const duration =  300;

const Banner = ({
        icon,
        iconWeight,
        iconSpin,
        title,
        body
    }) => {
    const [active, setActive] = useState(true);
    const [animate, setAnimate] = useState(false);

    function removeBanner () {
        setAnimate(true);
        setTimeout(()=>setActive(false), (duration + 100));
    }
    return (
        <Fragment>
        {active &&
            <Transition in={animate} timeout={duration}>
                {(state) =>
                    <Wrapper state={state}>
                        {icon && <Icon icon={icon} iconWeight={iconWeight} iconSping={iconSpin}/>}
                        <Box ml={5}>
                            <Heading size="xs" mb={1}>{title}</Heading>
                            <Paragraph>{body}</Paragraph>
                        </Box>
                        <CloseIcon icon="times"  onClick={() => removeBanner()}/>
                    </Wrapper>
                }
            </Transition>
        }
        </Fragment>
    )
};

Banner.propTypes = {
    body: PropTypes.string,
    icon: PropTypes.string,
    iconSpin: PropTypes.bool,
    iconWeight: PropTypes.string,
    title: PropTypes.string
}

Banner.defaultProps = {
    body: '',
    icon: null,
    iconSpin: false,
    iconWeight: 'regular',
    title: ''
};

export default Banner;