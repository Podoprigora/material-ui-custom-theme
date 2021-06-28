import React from 'react';

import { StylesProvider } from '@material-ui/core/styles';

import { TestButtonPage } from '../../pages/TestButtonPage';

const App = () => {
    return (
        <StylesProvider injectFirst>
            <TestButtonPage />
        </StylesProvider>
    );
};

export { App };
