import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, object, text, withKnobs } from '@storybook/addon-knobs';

import SimpleBarChart from '../SimpleBarChart';

const data = [
  { segments: [{ identifier: 1, label: 'Device Operations' }], value: 6 },
  { segments: [{ identifier: 2, label: 'Student Agency' }], value: 4.5 },
  { segments: [{ identifier: 3, label: 'Family and Community Partnerships' }], value: 4 },
  { segments: [{ identifier: 4, label: 'Tier 1 Instruction' }], value: 1 },
  { segments: [{ identifier: 5, label: 'Learning Habits and Expectations' }], value: 1 },
];

const props = () => ({
  data: object('data', data),
  loading: boolean('loading', false),
  segmentationLabel: text('segmentationLabel', 'Coaching Focus'),
  segmentOnClick: action('segmentOnClick'),
  truncateAt: number('truncateAt', 5),
  unitsLabel: text('unitsLabel', 'Hours'),
});

storiesOf('chart.SimpleBarChart', module)
  .addDecorator(story => (
    <div
      style={{
        margin: '20px auto',
        width: '800px',
      }}
    >
      {story()}
    </div>
  ))
  .addDecorator(withKnobs)
  .add('Basic usage', () => <SimpleBarChart {...props()} />);
