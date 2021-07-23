import React from 'react';

import { Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import { MuiCustomThemeProvider } from '@mui-custom/ThemeProvider';

export const App = () => {
    return (
        <MuiCustomThemeProvider>
            <>
                <Button variant="contained" startIcon={<ShoppingCart />}>
                    Save product
                </Button>
            </>
        </MuiCustomThemeProvider>
    );
};
