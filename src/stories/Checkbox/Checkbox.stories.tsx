import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Checkbox, CheckboxProps, IconButton, Icon } from '@material-ui/core';

export default {
    title: 'mui-custom/Checkbox',
    component: Checkbox
} as Meta;

export const Default: Story<CheckboxProps> = (args) => {
    return (
        <>
            <Checkbox {...args} />
        </>
    );
};

Default.args = {
    disabled: false,
    color: 'primary'
} as CheckboxProps;
