/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import MuiButton from '@material-ui/core/Button';
import SkbButton from '@skbkontur/react-ui/Button';

import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, select,
} from '@storybook/addon-knobs';
import { Wrapper } from './Wrapper';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs({ escapeHTML: false }));


stories.add('Regular', () => {
  const buttonText = text('buttonText', 'Button');
  const buttonColor = select('buttonText', ['secondary', 'primary', 'default', 'inherit'], 'default');
  return (
    <Wrapper
      mui={() => [
        <MuiButton
          color={buttonColor}
          key="1"
        >
          {buttonText}
        </MuiButton>,
        <MuiButton
          key="2"
          variant="contained"
          color={buttonColor}
        >
          {buttonText}
        </MuiButton>,
        <MuiButton
          key="2"
          variant="outlined"
          color={buttonColor}
        >
          {buttonText}
        </MuiButton>,
      ]}
      skb={() => [
        <SkbButton key="1">{buttonText}</SkbButton>,
      ]}
    />
  );
});
