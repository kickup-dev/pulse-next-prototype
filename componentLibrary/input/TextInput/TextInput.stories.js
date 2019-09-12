import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import { Icon } from '../../icon';

import TextInput from './TextInput';

const props = () => ({
  disabled: boolean('disabled', false),
  hasError: boolean('hasError', false),
  onChange: action('onChange'),
  placeholder: text('placeholder', undefined),
});

const startAdornmentIcon = () => text('startAdornment (icon)', '');
const endAdornmentIcon = () => text('endAdornment (icon)', '');

storiesOf('input.TextInput', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const _startAdornmentIcon = startAdornmentIcon();
    const _endAdornmentIcon = endAdornmentIcon();

    return (
      <TextInput
        startAdornment={!!_startAdornmentIcon && (
          <Icon icon={_startAdornmentIcon} />
        )}
        endAdornment={!!_endAdornmentIcon && (
          <Icon icon={_endAdornmentIcon} />
        )}
        {...props()}
      />
    );
  });

