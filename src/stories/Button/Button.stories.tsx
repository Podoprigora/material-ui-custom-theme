import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { KeyboardArrowRight, ShoppingCart } from '@material-ui/icons';

import { Button, ButtonProps } from './Template';

export default {
    component: Button,
    title: 'mui-custom/Button'
} as Meta;

export const Default: Story<ButtonProps> = (args) => {
    return <Button {...args} />;
};

Default.args = {
    color: 'secondary',
    variant: 'contained',
    children: 'Save product',
    startIcon: <ShoppingCart />
} as ButtonProps;

export const Examples = () => {
    return (
        <>
            {/* Contained */}

            <div className="actions-bar u-margin-b-10">
                <Button variant="contained">Save product</Button>
                <Button variant="contained" color="secondary">
                    Save product
                </Button>
                <Button variant="contained" color="inherit">
                    Save product
                </Button>
            </div>

            {/* Contained disabled */}

            <div className="actions-bar u-margin-b-10">
                <Button variant="contained" disabled>
                    Save product
                </Button>
                <Button variant="contained" color="secondary" disabled>
                    Save product
                </Button>
                <Button variant="contained" color="inherit" disabled>
                    Save product
                </Button>
            </div>

            {/* Outlined */}

            <div className="actions-bar u-margin-b-10">
                <Button variant="outlined">Save product</Button>
                <Button variant="outlined" color="secondary">
                    Save product
                </Button>
                <Button variant="outlined" color="inherit">
                    Save product
                </Button>
            </div>

            {/* Outlined disabled */}

            <div className="actions-bar u-margin-b-10">
                <Button variant="outlined" disabled>
                    Save product
                </Button>
                <Button variant="outlined" color="secondary" disabled>
                    Save product
                </Button>
                <Button variant="outlined" color="inherit" disabled>
                    Save product
                </Button>
            </div>

            {/* Text */}

            <div className="actions-bar u-margin-b-10">
                <Button variant="text">Save product</Button>
                <Button variant="text" color="secondary">
                    Save product
                </Button>
                <Button variant="text" color="inherit">
                    Save product
                </Button>
            </div>

            {/* Text disabled */}

            <div className="actions-bar u-margin-b-10">
                <Button variant="text" disabled>
                    Save product
                </Button>
                <Button variant="text" color="secondary" disabled>
                    Save product
                </Button>
                <Button variant="text" color="inherit" disabled>
                    Save product
                </Button>
            </div>

            {/* Sizes */}

            <div className="actions-bar actions-bar--direction-column u-margin-b-10">
                <Button variant="contained" color="secondary" size="large">
                    Save product
                </Button>
                <Button variant="contained" color="secondary" size="medium">
                    Save product
                </Button>
                <Button variant="contained" color="secondary" size="small">
                    Save product
                </Button>
            </div>
            <div className="actions-bar actions-bar--direction-column u-margin-b-10">
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<ShoppingCart />}
                    endIcon={<KeyboardArrowRight />}
                >
                    Save product
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="medium"
                    startIcon={<ShoppingCart />}
                >
                    Save product
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<ShoppingCart />}
                >
                    Save product
                </Button>
            </div>
            <div className="actions-bar actions-bar--direction-column u-margin-b-10">
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<ShoppingCart />}
                    endIcon={<KeyboardArrowRight />}
                >
                    Save product
                </Button>
                <Button variant="outlined" size="medium" startIcon={<ShoppingCart />}>
                    Save product
                </Button>
                <Button variant="outlined" size="small" startIcon={<ShoppingCart />}>
                    Save product
                </Button>
            </div>

            {/* Only Icon */}

            <div className="actions-bar u-margin-b-10">
                <Button
                    variant="text"
                    size="large"
                    color="secondary"
                    startIcon={<ShoppingCart />}
                    className="MuiButton-iconOnly"
                />
                <Button
                    variant="text"
                    size="medium"
                    startIcon={<ShoppingCart />}
                    className="MuiButton-iconOnly"
                />
                <Button
                    variant="text"
                    size="small"
                    color="inherit"
                    startIcon={<ShoppingCart />}
                    className="MuiButton-iconOnly"
                />
            </div>
        </>
    );
};
