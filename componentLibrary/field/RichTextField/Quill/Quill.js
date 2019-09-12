import React from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import './style.css';

const StyledQuill = styled(ReactQuill)`
  &.quill {
    border: 2px solid ${({ theme, hasError }) => (hasError ? theme.colors.red : '#ddd')};

    .ql-container {
      height: 116px;
      border: none;
      font-family: "Nunito Sans", "Helvetica", sans-serif;
      font-size: 14px;
      .ql-editor.ql-blank::before {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #8e8e8e;
      }
    }
    .ql-toolbar {
      border: none;
      border-bottom: 2px solid #ddd;
    }
    .ql-tooltip {
      border: 2px solid #ddd;
      &:before {
        color: ${({ theme }) => theme.colors.grayDark};
        font-family: "Nunito Sans", "Helvetica", sans-serif;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 11px;
      }
    }
    a { color: ${({ theme }) => theme.colors.blue}; }
    .ql-editor ol, .ql-editor ul {
      padding-left: 30px;
      li:not(.ql-direction-rtl) { padding-left: 0px;}
    }
  }
`;

const Quill = props => (
  <StyledQuill
    {...props}
  />
);

export default Quill;
