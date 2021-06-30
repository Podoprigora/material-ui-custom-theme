import React from 'react';

import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';

import { theme } from './theme';

type ThemeProviderPrividerProps = {
    children: React.ReactNode;
};

export const ThemeProvider = (props: ThemeProviderPrividerProps) => {
    const { children } = props;

    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </StylesProvider>
    );
};
