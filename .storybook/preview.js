import { themes } from '@storybook/theming';
import '!style-loader!css-loader!../src/components/app/app.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    stylePreview: true,
    classTarget: 'body',
    darkClass: 'dark',
    lightClass: 'light',
  },
};
