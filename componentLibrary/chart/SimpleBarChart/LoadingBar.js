import React from 'react';
import { Box } from 'rebass';
import { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: .25; }
  50% { opacity: .75; }
  100% {opacity: .25; }
`;

const LoadingBar = props => (
  <Box
    bg="grayLight"
    {...props}
    css={`
      animation: ${pulse} 1s infinite;
      height: 20px;
      animation-delay: 0.33s;

      &:nth-of-type(2n+1) {
        animation-delay: 0s;
      }
    `}
  />
);

export default LoadingBar;
