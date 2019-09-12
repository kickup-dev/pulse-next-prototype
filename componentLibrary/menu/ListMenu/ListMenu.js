import PropTypes from 'prop-types';
import React from 'react';

import Menu from '../Menu';
import { ContentBlock } from '../../layout';

const ListMenu = ({ children, accentColor, ...props }) => (
  <ContentBlock
    accentColor={accentColor}
    innerPadding={0}
    pt={0}
    {...props}
  >
    <ul
      css={{
        listStyle: 'none',
        paddingLeft: 0,
        marginBottom: 0,
        marginTop: 0,
      }}
    >
      {children}
    </ul>
  </ContentBlock>
);

ListMenu.ConfirmDeletionModalItem = Menu.ConfirmDeletionModalItem;
ListMenu.Item = Menu.Item;
ListMenu.ModalItem = Menu.ModalItem;

ListMenu.propTypes = {
  accentColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

ListMenu.defaultProps = {
  accentColor: '',
};

export default ListMenu;
