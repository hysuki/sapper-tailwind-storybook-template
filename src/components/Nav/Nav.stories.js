import { action } from '@storybook/addon-actions'
import Nav from './Nav.svelte'
import { storiesOf } from '@storybook/svelte'

storiesOf('Nav', module)
  .add('with text', () => ({
    Component: Nav,
    props: { text: 'Hello Button' },
    on: { click: action('clicked')}
  }))
