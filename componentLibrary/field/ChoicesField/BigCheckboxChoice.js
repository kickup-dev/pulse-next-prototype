import PropTypes from 'prop-types';
import React from 'react';
import { Button, Flex } from 'rebass';

import { Icon } from '../../icon';
import { Heading, Paragraph } from '../../text';

const BigCheckboxChoice = ({
  description,
  isSelected,
  label,
  onChange,
}) => (
  <Button
    active={isSelected}
    bg="white"
    border={2}
    borderColor={isSelected ? 'success' : 'grayMedium'}
    onClick={onChange}
    px={4}
    py={3}
    type="button"
    css={`
      flex-grow: 1;
      flex-basis: 0;
      cursor: pointer;
      outline: none;
      text-align: left;
      transition: border-color .2s ease-in-out;

      &:hover {
        border-color: ${({ active, theme }) => (active
          ? theme.colors.green
          : theme.colors.blue)};
      }
    `}
  >
    <Flex>
      <Icon
        color={isSelected  ? 'success' : 'grayMedium'}
        icon={isSelected ? 'check-circle' : 'circle'}
        fontSize={4}
        mr={3}
      />
      <div>
        <Heading size="sm">{label}</Heading>
        {description && <Paragraph mt={2}>{description}</Paragraph>}
      </div>
    </Flex>
  </Button>
);

BigCheckboxChoice.propTypes = {
  description: PropTypes.string,
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

BigCheckboxChoice.defaultProps = {
  description: '',
};

export default BigCheckboxChoice;
