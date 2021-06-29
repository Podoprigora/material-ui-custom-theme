import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../mui-custom/Button';

export default {
    component: Button,
    title: 'mui-custom/Button'
} as Meta;

export const Default: Story<ButtonProps> = (args) => {
    return <Button {...args} />;
};

Default.args = {
    color: 'primary',
    variant: 'contained',
    children: 'Test Button'
} as ButtonProps;
