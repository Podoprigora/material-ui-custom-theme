import React from 'react';

import { Button, IconButton, SvgIcon, Icon } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import { ThemeProvider } from '@mui-custom/ThemeProvider';
import { TestSvg } from '../../assets/svg-icons';

export const App = () => {
    return (
        <ThemeProvider>
            <>
                <Button variant="contained" startIcon={<ShoppingCart />}>
                    Save product
                </Button>

                <IconButton size="large" color="secondary">
                    <Icon>
                        <TestSvg />
                    </Icon>
                </IconButton>
            </>
        </ThemeProvider>
    );
};
