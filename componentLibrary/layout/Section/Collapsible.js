import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const TRANSITION_PIXELS_PER_MS = 3;

const CollapsibleWrapper = styled.div`
  height: auto;
  max-height: ${({ height, isOpen }) => (isOpen ? height : 0)}px;
  overflow: hidden;
  transition: max-height ${({ height }) => height / TRANSITION_PIXELS_PER_MS}ms linear;
`;

export default class Collapsible extends Component {
  render() {
    const { children, isOpen } = this.props;

    return (
      <CollapsibleWrapper
        ref={(el) => { this.el = el; }}
        height={this.el ? this.el.scrollHeight : 0}
        isOpen={isOpen}
      >
        {children}
      </CollapsibleWrapper>
    );
  }
}

Collapsible.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
