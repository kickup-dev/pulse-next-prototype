import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import HighlightedMatches from './HighlightedMatches';

const props = () => ({
  text: text('text', 'Bob Loblaw\'s Law Blog'),
  searchValue: text('searchValue', 'bob'),
});

storiesOf('text.HighlightedMatches', module)
  .addDecorator(withKnobs)
  .add('Has match', () => <HighlightedMatches {...props()} />);
