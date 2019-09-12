import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Box, Flex } from 'rebass';

import { GhostButton } from '../../button';
import { CircleIcon } from '../../icon';
import { Heading, Paragraph } from '../../text';

import Collapsible from './Collapsible';

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.setOpen = this.setOpen.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.state = { isOpen: false };
  }

  setOpen() {
    this.setState(() => ({ isOpen: true }));
  }

  toggleOpen() {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }

  render() {
    const {
      accentColor,
      children,
      collapsible,
      headingIcon,
      headingIconWeight,
      headingMenu,
      headingText,
      subHeadingText,
      ...props
    } = this.props;
    const { isOpen } = this.state;

    return (
      <Box
        {...props}
        css={`
          &:not(:last-child) {
            margin-bottom: ${({ theme }) => theme.space[5]}px;
            padding-bottom: ${({ theme }) => theme.space[5]}px;
            border-bottom: 1px solid ${({ theme }) => theme.colors.grayMediumLight};
          }
        `}
      >
        <Flex
          justifyContent="space-between"
          onClick={collapsible && !isOpen ? this.setOpen : null}
          css={`
            cursor: ${collapsible && !isOpen ? 'pointer' : 'auto'}
          `}
        >
          <Flex alignItems="center">
            {headingIcon && (
              <CircleIcon
                color={accentColor}
                icon={headingIcon}
                iconWeight={headingIconWeight}
                mr={3}
                size="sm"
              />
            )}
            <div>
              <Heading size="sm">{headingText}</Heading>
              {subHeadingText && <Paragraph>{subHeadingText}</Paragraph>}
            </div>
          </Flex>
          {headingMenu}
          {collapsible && (
            <Flex alignItems="center">
              <GhostButton
                icon={isOpen ? 'angle-down' : 'angle-left'}
                onClick={this.toggleOpen}
                px={3}
              />
            </Flex>
          )}
        </Flex>
        {collapsible ? (
          <Collapsible isOpen={isOpen}>
            <Box mt={3}>{children}</Box>
          </Collapsible>
        ) : <Box mt={3}>{children}</Box>}
      </Box>
    );
  }
}

Section.propTypes = {
  accentColor: PropTypes.string,
  collapsible: PropTypes.bool,
  children: PropTypes.node.isRequired,
  headingIcon: PropTypes.string,
  headingIconWeight: PropTypes.string, // eslint-disable-line react/require-default-props
  headingMenu: PropTypes.node,
  headingText: PropTypes.string,
  subHeadingText: PropTypes.string,
};

Section.defaultProps = {
  accentColor: '',
  collapsible: false,
  headingIcon: null,
  headingMenu: null,
  headingText: '',
  subHeadingText: '',
};
