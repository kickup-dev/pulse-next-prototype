import chroma from 'chroma-js';
import PropTypes from 'prop-types';
import React from 'react';
import { Box } from 'rebass';

const Bar = ({ color, width, ...props }) => (
  <Box
    {...props}
    css={`
      border: 2px solid;
      cursor: pointer;
      height: 20px;

      &:hover {
        opacity: 0.8;
      }
    `}
    // Use style prop instead of css prop to avoid generating classes
    // for each color and value.
    style={{
      backgroundColor: chroma(color).alpha(0.5).css(),
      borderColor: color,
      width: `${width * 100}%`,
    }}
  />
);

Bar.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Bar;
