import React from 'react';

import { MuiCustomThemeProvider } from '../src/mui-custom/ThemeProvider';

import '../src/scss/styles.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

export const decorators = [
    (Story) => {
        return (
            <MuiCustomThemeProvider>
                <Story />
            </MuiCustomThemeProvider>
        );
    }
];
