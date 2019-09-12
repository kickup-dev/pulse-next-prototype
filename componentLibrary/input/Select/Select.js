import chroma from 'chroma-js';
import React from 'react';
import { Text } from 'rebass';

const Select = props => (
  <Text
    as="select"
    bg="white"
    color="grayDark"
    fontSize={1}
    fontWeight={500}
    {...props}
    css={`
      border-radius: 2px;
      border: 2px solid ${({ theme }) => theme.colors.grayMediumLight};
      height: 34px;
      transition: border-color ease-in-out 0.15s;

      &:focus {
        background-color:  ${({ theme }) => chroma(theme.colors.blue).alpha(0.05).css()};
        border-color: ${({ theme }) => theme.colors.blue}
        box-shadow: none;
        outline: 0;
      }
    `}
  />
);

const Option = props => <option {...props} />;

Select.Option = Option;

export default Select;
