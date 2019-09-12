import chroma from 'chroma-js';
import PropTypes from 'prop-types';
import React from 'react';
import { Flex, Text } from 'rebass';

const TextInput = React.forwardRef((props, ref) => {
  const { endAdornment, startAdornment } = props;

  const input = (
    <Text
      ref={ref}
      as="input"
      type="text"
      bg="white"
      color="grayDark"
      fontFamily="default"
      fontSize={1}
      fontWeight={500}
      lineHeight={1}
      pl={startAdornment ? 7 : 3}
      pr={endAdornment ? 7 : 3}
      py={3}
      width="100%"
      {...props}
      css={`
        border: 2px solid;
        border-color: ${({ theme, hasError }) => (hasError ? theme.colors.red : theme.colors.grayMediumLight)};
        border-radius: 2px;
        display: block;
        outline: none;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

        &:disabled {
          cursor: not-allowed;
          background-color: ${({ theme }) => theme.colors.grayLight};
        }

        &:focus {
          border-color: ${({ theme, hasError }) => (hasError ? theme.colors.red : theme.colors.blue)};
          box-shadow: ${({ hasError }) => hasError && 'inset 0 1px 1px rgba(0,0,0,0.075)'};
          background-color:  ${({ theme }) => chroma(theme.colors.blue).alpha(0.05).css()};
        }

        ::placeholder {
          color ${({ theme }) => theme.colors.grayMedium};
        }
      `}
    />
  );

  return !(startAdornment || endAdornment) ? input : (
    <Text
      as="label"
      color="grayDark"
      fontSize="initial"
      mb={0}
      pl={0}
      width="100%"
      css={`
        position: relative;
        display: inline-block;
      `}
    >
      {startAdornment && (
        <Flex
          alignItems="center"
          px={4}
          css={`
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
          `}
        >
          {startAdornment}
        </Flex>
      )}
      {input}
      {endAdornment && (
        <Flex
          alignItems="center"
          px={4}
          css={`
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
          `}
        >
          {endAdornment}
        </Flex>
      )}
    </Text>
  );
});

TextInput.propTypes = {
  /** Optional element that appears as part of the end of the input */
  endAdornment: PropTypes.node,
  hasError: PropTypes.bool,
  /** Optional element that appears as part of the start of the input */
  startAdornment: PropTypes.node,
};

TextInput.defaultProps = {
  endAdornment: null,
  hasError: false,
  startAdornment: null,
};

export default TextInput;
