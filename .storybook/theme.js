import { create } from '@storybook/theming';

export default create({
    base: 'light',

    colorPrimary: 'hotpink',
    colorSecondary: 'deepskyblue',

    // UI
    // appBg: 'white',
    // appContentBg: 'silver',
    appBorderColor: 'grey',
    appBorderRadius: 4,
    /*
      // Typography
      fontBase: '"Open Sans", sans-serif',
      fontCode: 'monospace',
      // Text colors
      textColor: 'black',
      textInverseColor: 'rgba(255,255,255,0.9)',
      // Toolbar default and active colors
      barTextColor: 'silver',
      barSelectedColor: 'black',
      barBg: 'hotpink',
      // Form colors
      inputBg: 'white',
      inputBorder: 'silver',
      inputTextColor: 'black',
      inputBorderRadius: 4,
    */
    brandTitle: 'Sapper storybook',
    brandUrl: 'https://github.com/sveltejs/sapper-template',
    brandImage: 'https://avatars0.githubusercontent.com/u/23617963?s=400&v=4',
});