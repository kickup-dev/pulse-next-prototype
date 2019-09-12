import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import RichTextField from './RichTextField';

const props = () => ({
  label: text('label', 'Label'),
  meta: {},
});

class RichTextFieldWrapper extends Component {
  constructor(_props) {
    super(_props);
    this.state = { value: '' };
  }

  render() {
    const input = {
      onChange: (value) => {
        action('onChange')(value);
        this.setState({ value });
      },
      value: this.state.value,
    };

    return <RichTextField input={input} {...this.props} />;
  }
}

storiesOf('field.RichTextField', module)
  .addDecorator(withKnobs)
  .add('Default', () => <RichTextFieldWrapper {...props()} />)
  .add('Error', () => (
    <RichTextFieldWrapper
      {...props()}
      meta={{
        ...props.meta,
        error: text('error', 'Error Message'),
        touched: boolean('touched', true),
      }}
    />
  ));

