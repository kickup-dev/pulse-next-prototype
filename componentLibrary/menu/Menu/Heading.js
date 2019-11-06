import PropTypes from 'prop-types';
import React from 'react';
import { Flex } from 'rebass';

import { Meta } from '../../text';
import { Icon } from '../../icon';


const Item = ({
  children,
  icon,
  iconWeight,
  ...props
}) => (
  <li
    css={`
      border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
    `}
  >
    <Meta
      bg="white"
      color="grayDark"
      lineHeight={1}
      p={3}
      pt={4}
      role="menuitem"
      {...props}
      css={`
        display: block;
        /* Negate legacy styles */
        margin-bottom: 0;
        pointer-events: none
      `}
    >
      {!icon ? children : (
        <Flex alignItems="center">
          <Icon
            fontSize={1}
            icon={icon}
            iconWeight={iconWeight}
            mr={3}
          />
          {children}
        </Flex>
      )}
    </Meta>
  </li>
);

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  icon: PropTypes.string,
  iconWeight: PropTypes.string,
};

Item.defaultProps = {
  icon: null,
  iconWeight: 'regular',
};

export default Item;
