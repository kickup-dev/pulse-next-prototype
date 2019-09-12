import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import tokens from '@kickup/pulse-style-tokens';

import { Paragraph } from '../../text';

import ContentBlock from '../ContentBlock';

import Subsection from './Subsection';

const props = () => ({
  accentColor: select('accentColor', [null, ...Object.keys(tokens.colors)], tokens.colors.lightBlue),
});

storiesOf('layout.Subsection', module)
  .addDecorator(story => (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        backgroundColor: '#ddd',
      }}
    >
      <div
        style={{
          margin: '20px auto',
          maxWidth: '960px',
          width: '90%',
        }}
      >
        {story()}
      </div>
    </div>
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ContentBlock>
      <Subsection {...props()}>
        <Paragraph>{text('children', 'This is a subsection.')}</Paragraph>
      </Subsection>
    </ContentBlock>
  ));
