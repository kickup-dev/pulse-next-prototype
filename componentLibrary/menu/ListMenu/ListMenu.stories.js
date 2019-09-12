import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { Button, OutlineButton } from '../../button';
import { Modal } from '../../modal';
import { Paragraph } from '../../text';

import ListMenu from './ListMenu';

storiesOf('menu.ListMenu', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ListMenu>
      <ListMenu.Item icon="comment" onClick={action('onClick 1')}>
        Hello There
      </ListMenu.Item>
      <ListMenu.Item icon="jedi-order" iconWeight="brand" onClick={action('onClick 2')}>
        General Kenobi
      </ListMenu.Item>
    </ListMenu>
  ))
  .add('With confirmation modal', () => (
    <ListMenu>
      <ListMenu.ModalItem
        icon="galactic-republic"
        iconWeight="brand"
        modal={({ handleClose, isOpen }) => (
          <Modal
            accentColor="red"
            footer={(
              <div>
                <OutlineButton color="red" mr={2} onClick={handleClose}>Cancel</OutlineButton>
                <Button color="red" onClick={handleClose}>Execute</Button>
              </div>
            )}
            handleClose={handleClose}
            headingIcon="galactic-republic"
            headingIconWeight="brand"
            headingText="Order 66"
            isOpen={isOpen}
          >
            <Paragraph>
              Are you sure you want to execute?
            </Paragraph>
          </Modal>
        )}
      >
        Execute Order 66
      </ListMenu.ModalItem>
    </ListMenu>
  ));
