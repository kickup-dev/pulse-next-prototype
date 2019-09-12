import React from 'react';
import PropTypes from 'prop-types';
import { Card, Flex } from 'rebass';

const Divider = ({ children, accentColor, ...props }) => (
  <Flex alignItems="center" {...props}>
    <Card mr={3} border="1px solid" borderColor={accentColor} css="flex-grow: 1" as="hr" />
    {children}
    <Card ml={3} border="1px solid" borderColor={accentColor} css="flex-grow: 1" as="hr" />
  </Flex>
);

Divider.propTypes = {
  children: PropTypes.node.isRequired,
  accentColor: PropTypes.string,
};

Divider.defaultProps = {
  accentColor: 'grayMediumLight',
};

export default Divider;
