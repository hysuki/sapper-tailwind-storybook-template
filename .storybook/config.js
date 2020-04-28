import { configure, addParameters } from '@storybook/svelte';
import Theme from './theme';

// import tailwind
import '../static/index.css'

addParameters({
    options: {
        hierarchyRootSeparator: /\|/,
        theme: Theme,
    },
});

function loadStories() {
    require('../src/components/.stories')
}

configure(loadStories, module);
