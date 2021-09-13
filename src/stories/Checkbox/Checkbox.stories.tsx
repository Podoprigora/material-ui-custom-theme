import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
    Button,
    Checkbox,
    FormControlLabel,
    Icon,
    InputAdornment,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack
} from '@material-ui/core';
import { SaveOutlined } from '@material-ui/icons';
import { MuiCustomTextField } from '@mui-custom';

export default {
    title: 'mui-custom/Checkbox',
    component: Checkbox
} as Meta;

export const Default: Story = () => {
    return (
        <>
            <Checkbox />
        </>
    );
};

export const FormControlLabelStory: Story = () => {
    return (
        <Stack direction="column" alignItems="flex-start" spacing={4}>
            <FormControlLabel label="Label" labelPlacement="end" control={<Checkbox />} />
            <FormControlLabel label="Label" labelPlacement="start" control={<Checkbox />} />
            <Stack direction="row" justifyContent="flex-start" flexWrap="wrap" gap={8}>
                <FormControlLabel label="Label" labelPlacement="end" control={<Checkbox />} />
                <FormControlLabel label="Label" labelPlacement="end" control={<Checkbox />} />
                <FormControlLabel label="Label" labelPlacement="end" control={<Checkbox />} />
                <FormControlLabel label="Label" labelPlacement="end" control={<Checkbox />} />
            </Stack>
            <Stack direction="column" spacing={1}>
                <FormControlLabel label="Label" labelPlacement="end" control={<Checkbox />} />
                <FormControlLabel label="Label" labelPlacement="end" control={<Checkbox />} />
                <FormControlLabel label="Label" labelPlacement="end" control={<Checkbox />} />
                <FormControlLabel label="Label" labelPlacement="end" control={<Checkbox />} />
            </Stack>
        </Stack>
    );
};

FormControlLabelStory.storyName = 'Form Control Label';
