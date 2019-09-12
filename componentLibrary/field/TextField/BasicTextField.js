import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../input/TextInput';
import Fieldset from '../Fieldset';

const BasicTextField = ({
  error,
  id,
  label,
  onChange,
  onBlur,
  name,
  ...props
}) => (
  <Fieldset
    error={error}
    label={label}
    labelHtmlFor={id}
  >
    <TextInput
      hasError={!!error}
      id={id}
      onBlur={onBlur}
      onChange={onChange}
      {...props}
    />
  </Fieldset>
);

BasicTextField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  label: PropTypes.string,
};

BasicTextField.defaultProps = {
  error: '',
  id: null,
  label: '',
  onBlur: () => {},
  onChange: () => {},
};

export default BasicTextField;
