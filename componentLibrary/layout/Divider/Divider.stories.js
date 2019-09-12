import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import tokens from '@kickup/pulse-style-tokens';


import { Paragraph, Meta } from '../../text';

import Divider from './Divider';

const props = () => ({
  accentColor: select('accentColor', ['danger', ...Object.keys(tokens.colors)], 'danger'),
});

storiesOf('layout.Divider', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Fragment>
      <Paragraph>{'I don\'t like sand. It\'s coarse, and rough, and irritating, and it gets everywhere.'}</Paragraph>
      <Divider mt={5} mb={5} {...props()}>
        <Meta>{text('children', 'This is where the fun begins')}</Meta>
      </Divider>
      <Paragraph>{'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.'}</Paragraph>
    </Fragment>
  ));
