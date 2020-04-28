import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import Button from './Button.svelte';

storiesOf('Button', module)
  .add('with text', () => ({
    Component: Button,
    data: {
      text: 'some text',
    },
    on: {
      click: action('Button ckicked'),
    },
  }))
