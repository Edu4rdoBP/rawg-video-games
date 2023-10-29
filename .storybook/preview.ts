import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import '../src/styles/globals.css'
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    nextRouter: {
      Provider: RouterContext.Provider,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
