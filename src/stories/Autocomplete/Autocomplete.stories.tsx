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
import countriesRawData from '../assets/data/countries.json';
import { MuiCustomAutocomplete } from '@mui-custom/Autocomplete';

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
                options={countriesRawData}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <MuiCustomTextField {...params} variant="original" label="Countries" />
                )}
                renderOption={(params, option) => {
                    const { className, ...other } = params;
                    const { label } = option;

                    return <AutocompleteListItem {...other}>{label}</AutocompleteListItem>;
                }}
            />
        </div>
    );
};

export const Custom: Story = () => {
    return (
        <div style={{ maxWidth: '40rem' }}>
            <MuiCustomAutocomplete
                // freeSolo
                // forcePopupIcon
                options={topFilmsRawData}
                getOptionLabel={(option) => {
                    return option.title;
                }}
                renderInput={(params) => (
                    <MuiCustomTextField {...params} variant="original" label="Countries" />
                )}
            />
        </div>
    );
};
