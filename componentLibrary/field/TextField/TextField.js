import React from 'react';
import PropTypes from 'prop-types';

import BasicTextField from './BasicTextField';

const TextField = ({
  input: { name, onBlur, onChange, value },
  meta: { error, form, touched },
  label,
  ...props
}) => {
  const hasError = error && touched;
  const id = `${form}-${name}`;

  return (
    <BasicTextField
      id={id}
      hasError={hasError}
      error={hasError && error}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      label={label}
      {...props}
    />
  );
};

TextField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    form: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
  label: PropTypes.string,
};

TextField.defaultProps = {
  label: '',
};

export default TextField;
