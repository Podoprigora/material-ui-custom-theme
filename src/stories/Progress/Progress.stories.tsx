import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CircularProgress, Stack } from '@material-ui/core';

export default {
    title: 'mui-custom/CircularProgress',
    component: CircularProgress
} as Meta;

export const Circular: Story = () => {
    return (
        <Stack direction="column" spacing={10}>
            <CircularProgress color="inherit" />
            <CircularProgress color="primary" />
            <CircularProgress color="secondary" />
        </Stack>
    );
};
