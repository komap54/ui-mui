/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import MuiButton from '@material-ui/core/Button';
import SkbButton from '@skbkontur/react-ui/Button';

import { storiesOf } from '@storybook/react';
import {
  withKnobs, text,
} from '@storybook/addon-knobs';
import { Wrapper } from './Wrapper';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs({ escapeHTML: false }));


stories.add('Regular', () => {
  const buttonText = text('buttonText', 'Button');
  return (
    <Wrapper
      mui={(
        <>
          <MuiButton>{buttonText}</MuiButton>
          <MuiButton variant="contained">{buttonText}</MuiButton>
          <MuiButton variant="outlined">{buttonText}</MuiButton>
        </>
      )}
      skb={(
        <>
          <SkbButton>{buttonText}</SkbButton>
          <SkbButton>{buttonText}</SkbButton>
          <SkbButton>{buttonText}</SkbButton>
        </>
      )}
    />
  );
});
