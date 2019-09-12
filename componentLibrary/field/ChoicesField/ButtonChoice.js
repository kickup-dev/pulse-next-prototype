import PropTypes from 'prop-types';
import React from 'react';

import { Button, OutlineButton } from '../../button';

const ButtonChoice = ({
  isSelected,
  label,
  onChange,
}) => {
  const ButtonComponent = isSelected ? Button : OutlineButton;

  return (
    <ButtonComponent
      color={isSelected ? 'green' : 'grayMediumLight'}
      mt={2}
      onClick={onChange}
      size="sm"
    >
      {label}
    </ButtonComponent>
  );
};

ButtonChoice.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ButtonChoice;
