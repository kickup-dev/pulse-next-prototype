import PropTypes from 'prop-types';
import React from 'react';
import { Flex } from 'rebass';

import { toggleElement } from '../../../utils/utils';

import Fieldset from '../Fieldset';

import BigCheckboxChoice from './BigCheckboxChoice';
import ButtonChoice from './ButtonChoice';

const choiceComponents = {
  bigCheckbox: BigCheckboxChoice,
  button: ButtonChoice,
};

const ChoicesField = ({
  allowMultiple,
  choiceFormat,
  choices,
  input: { onChange, value: selectedValue },
  meta: { error, touched },
  label,
}) => {
  const hasError = error && touched;

  const isSelected = value => (
    allowMultiple
      ? (selectedValue || []).includes(value)
      : selectedValue === value
  );

  const handleChange = (value) => {
    if (allowMultiple) {
      const selectedValues = selectedValue || [];
      onChange(toggleElement(selectedValues, value));
    } else {
      onChange(value);
    }
  };

  const ChoiceComponent = choiceComponents[choiceFormat];

  return (
    <Fieldset
      error={hasError ? error : null}
      label={label}
    >
      <Flex
        css={`
          > *:not(:last-child) {
            margin-right: ${({ theme }) => theme.space[2]}px;
          }
        `}
      >
        {choices.map(({ value, ...choice }) => (
          <ChoiceComponent
            key={value}
            isSelected={isSelected(value)}
            onChange={() => handleChange(value)}
            {...choice}
          />
        ))}
      </Flex>
    </Fieldset>
  );
};

ChoicesField.propTypes = {
  allowMultiple: PropTypes.bool,
  choiceFormat: PropTypes.oneOf(Object.keys(choiceComponents)),
  choices: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
  })).isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ])),
      PropTypes.array,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    touched: PropTypes.bool,
  }).isRequired,
};

ChoicesField.defaultProps = {
  allowMultiple: false,
  choiceFormat: 'button',
  label: '',
};

export default ChoicesField;
