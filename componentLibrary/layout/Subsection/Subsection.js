import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'rebass';

const Subsection = ({ children, accentColor, ...props }) => (
  <Card
    p={1}
    pl={4}
    borderLeft="3px solid"
    borderColor={accentColor}
    {...props}
  >
    {children}
  </Card>
);

Subsection.propTypes = {
  accentColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Subsection.defaultProps = {
  accentColor: 'lightBlue',
};


export default Subsection;
