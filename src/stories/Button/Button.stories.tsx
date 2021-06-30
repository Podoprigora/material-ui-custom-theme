import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './TemplateButton';

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
    children: 'Save product'
} as ButtonProps;

export const Examples = () => {
    return (
        <>
            <div className="actions-bar u-margin-b-10">
                <Button color="primary" variant="contained">
                    Save product
                </Button>
                <Button color="secondary" variant="contained">
                    Save product
                </Button>
                <Button variant="contained">Save product</Button>
            </div>
            <div className="actions-bar u-margin-b-10">
                <Button variant="outlined" color="primary">
                    Save product
                </Button>
                <Button variant="outlined" color="secondary">
                    Save product
                </Button>
                <Button variant="outlined">Save product</Button>
            </div>
            <div className="actions-bar u-margin-b-10">
                <Button color="primary">Save product</Button>
                <Button color="secondary">Save product</Button>
                <Button>Save product</Button>
            </div>
        </>
    );
};
