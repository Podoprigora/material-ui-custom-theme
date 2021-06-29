import React from 'react';

import { Button } from '../mui-custom/Button';

export default {
    component: Button,
    title: 'mui-custom/Button'
};

export const Default = (args) => {
    return <Button {...args} />;
};

Default.args = {
    color: 'primary',
    variant: 'contained',
    children: 'Test Button'
};
