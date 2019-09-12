import React from 'react';
import PropTypes from 'prop-types';

import Fieldset from '../Fieldset';
import Quill from './Quill';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
  ],
};

const formats = [
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet',
  'link',
];

const RichTextField = ({
  label,
  labelHtmlFor,
  input: { onChange, value },
  meta: { touched, error },
  ...props
}) => (
  <Fieldset error={touched ? error : null} label={label} labelHtmlFor={labelHtmlFor} >
    <Quill
      modules={modules}
      formats={formats}
      onChange={onChange}
      value={value}
      hasError={touched && error}
      {...props}
    />
  </Fieldset>
);

RichTextField.propTypes = {
  label: PropTypes.string,
  labelHtmlFor: PropTypes.string,
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    touched: PropTypes.bool,
  }).isRequired,
};

RichTextField.defaultProps = {
  label: null,
  labelHtmlFor: null,
};

export default RichTextField;
