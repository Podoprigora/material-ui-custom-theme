import React from 'react';

import { Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import { ThemeProvider } from '@mui-custom/ThemeProvider';

export const App = () => {
    return (
        <ThemeProvider>
            <Button variant="contained" startIcon={<ShoppingCart />}>
                Save product
            </Button>
        </ThemeProvider>
    );
};
