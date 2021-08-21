import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Autocomplete, useAutocomplete } from '@material-ui/core';

import topFilmsRawData from '../assets/data/top-films.json';

export default {
    title: 'mui-custom/Autocomplete',
    component: Autocomplete
} as Meta;

export const Default: Story = () => {
    console.log(topFilmsRawData);

    return <div>Autocomplete story</div>;
};
