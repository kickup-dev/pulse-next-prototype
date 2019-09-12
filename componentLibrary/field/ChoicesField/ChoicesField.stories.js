import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import ChoicesField from '../ChoicesField';

const props = () => ({
  allowMultiple: boolean('allowMultiple'),
  choices: [
    { description: 'A good option.', label: 'Option 1', value: 'option-1' },
    { description: 'A better option.', label: 'Option 2', value: 'option-2' },
    { description: 'The best option!', label: 'Option 3', value: 'option-3' },
  ],
  label: text('label', 'Label'),
  meta: {},
});

class ChoicesFieldWrapper extends Component {
  constructor(_props) {
    super(_props);
    this.state = { value: props().choices[0].value };
  }

  render() {
    const input = {
      onChange: (value) => {
        action('onChange')(value);
        this.setState({ value });
      },
      value: this.state.value,
    };

    return <ChoicesField input={input} {...this.props} {...props()} />;
  }
}

storiesOf('field.ChoicesField', module)
  .addDecorator(withKnobs)
  .add('Default', () => <ChoicesFieldWrapper {...props()} />)
  .add('With big checkboxes', () => (
    <ChoicesFieldWrapper choiceFormat="bigCheckbox" {...props()} />
  ));
