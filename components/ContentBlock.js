import PropTypes from 'prop-types';
import React from 'react';
import { Box, Card, Flex } from 'rebass';
import chroma from 'chroma-js';

import { CircleIcon } from '../componentLibrary/icon';
import { Heading } from '../componentLibrary/text';

const ContentBlock = React.forwardRef(({
  accentColor,
  borderTop,
  children,
  headingIcon,
  headingIconWeight,
  headingMenu,
  headingText,
  innerPadding,
  topPadding,
  ...props
}, ref) => (
  <Card
    ref={ref}
    bg="white"
    border="1px solid"
    borderColor="grayLight"
    width={1}
    pt={topPadding}
    {...props}
    css={`
      border: 1px solid ${({ theme }) => theme.colors.grayLight};
      box-shadow: ${({theme})=> `0 4px 20px ${chroma(theme.colors.grayDark).alpha(.2).css()}`} ;
      border-radius: 4px;
    `}
  >
    {headingText && (
      <Flex justifyContent="space-between" mb={4} px={5}>
        <Flex alignItems="center">
          {headingIcon && (
            <CircleIcon
              color={accentColor}
              icon={headingIcon}
              iconWeight={headingIconWeight}
              mr={2}
              size="sm"
            />
          )}
          <Heading size="sm">{headingText}</Heading>
        </Flex>
        {headingMenu}
      </Flex>
    )}
    <Box pb={innerPadding} px={innerPadding}>
      {children}
    </Box>
  </Card>
));

ContentBlock.propTypes = {
  accentColor: PropTypes.string,
  borderTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.string]),
  children: PropTypes.node.isRequired,
  headingIcon: PropTypes.string,
  headingIconWeight: PropTypes.string, // eslint-disable-line react/require-default-props
  headingMenu: PropTypes.node,
  headingText: PropTypes.string,
  innerPadding: PropTypes.number,
  topPadding: PropTypes.number,
};

ContentBlock.defaultProps = {
  accentColor: '',
  borderTop: ({ accentColor, theme }) => (
    `3px solid ${theme.colors[accentColor] || theme.colors.lightBlue}`
  ),
  headingIcon: '',
  headingMenu: null,
  headingText: '',
  innerPadding: 5,
  topPadding: 5,
};

export default ContentBlock;
