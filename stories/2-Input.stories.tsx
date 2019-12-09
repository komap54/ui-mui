/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import MuiInput from '@material-ui/core/TextField';
import SkbInput from '@skbkontur/react-ui/Input';

import { storiesOf } from '@storybook/react';
import {
  withKnobs, text,
} from '@storybook/addon-knobs';
import { Wrapper } from './Wrapper';

const stories = storiesOf('Text Inputs', module);
stories.addDecorator(withKnobs({ escapeHTML: false }));


stories.add('Regular', () => {
  const inputValue = text('inputText', 'Hello');
  return (
    <Wrapper
      mui={() => [
        <MuiInput
          key="1"
          defaultValue={inputValue}
        />,
        <MuiInput
          key="2"
          defaultValue={inputValue}
          variant="filled"
        />,
        <MuiInput
          key="3"
          defaultValue={inputValue}
          variant="outlined"
        />,
      ]}
      skb={() => [
        <SkbInput
          key="1"
          defaultValue={inputValue}
        />,
      ]}
    />
  );
});
