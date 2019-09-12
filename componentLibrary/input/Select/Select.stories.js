import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import Select from '../Select';

const props = () => ({
  onChange: action('onChange'),
});

storiesOf('input.Select', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Select {...props()}>
      <Select.Option>Option 1</Select.Option>
      <Select.Option>Option 2</Select.Option>
      <Select.Option>Option 3</Select.Option>
    </Select>
  ));

