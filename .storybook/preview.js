import React from 'react';

import { StylesProvider } from '@material-ui/core/styles';

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
            <StylesProvider injectFirst>
                <Story />
            </StylesProvider>
        );
    }
];
