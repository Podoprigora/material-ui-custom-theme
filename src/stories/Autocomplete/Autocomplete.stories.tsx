import React, { HTMLAttributes, useMemo } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
    Autocomplete,
    AutocompleteProps,
    AutocompleteRenderInputParams,
    AutocompleteRenderOptionState,
    Box,
    Icon,
    InputAdornment,
    ListItem,
    ListItemButton,
    ListItemText,
    useAutocomplete
} from '@material-ui/core';
import { MuiCustomTextField } from '@mui-custom';
import { SearchSvg, ZoomInSvg } from '../../assets/svg-icons/feather';

import topFilmsRawData from '../assets/data/top-films.json';

export default {
    title: 'mui-custom/Autocomplete',
    component: Autocomplete
} as Meta;

const AutocompleteListItem = (props: HTMLAttributes<HTMLLIElement>) => {
    const { className, children, ...other } = props;

    return (
        <li {...other} className="MuiMenuItem-root MuiMenuItem-gutters">
            <div className="MuiListItemText-root">{children}</div>
        </li>
    );
};

export const Default: Story = () => {
    return (
        <div style={{ maxWidth: '40rem' }}>
            <Autocomplete
                // open
                options={topFilmsRawData}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <MuiCustomTextField {...params} variant="original" label="Movie" />
                )}
                renderOption={(params, option) => {
                    const { className, ...other } = params;
                    const { title } = option;

                    return <AutocompleteListItem {...other}>{title}</AutocompleteListItem>;
                }}
            />
        </div>
    );
};
