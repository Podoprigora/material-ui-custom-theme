import React from 'react';

import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@material-ui/core/styles';

import { theme } from './theme';

type ThemeProviderPrividerProps = {
    children: React.ReactNode;
};

export const ThemeProvider = (props: ThemeProviderPrividerProps) => {
    const { children } = props;

    return (
        <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </StyledEngineProvider>
    );
};
