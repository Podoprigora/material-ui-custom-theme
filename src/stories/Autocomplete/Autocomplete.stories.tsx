import React, { HTMLAttributes, useMemo } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
    Autocomplete,
    AutocompleteProps,
    AutocompleteRenderInputParams,
    AutocompleteRenderOptionState,
    Box,
    Button,
    Icon,
    InputAdornment,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    useAutocomplete
} from '@material-ui/core';
import { MuiCustomTextField } from '@mui-custom';
import { SaveSvg, SearchSvg, UserPlusSvg, UsersSvg, UserSvg } from '../../assets/svg-icons/feather';

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
                options={topFilmsRawData}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <MuiCustomTextField {...params} variant="original" label="Films" />
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

export const Custom: Story = () => {
    return (
        <Stack direction="column" alignItems="flex-start" spacing={10} sx={{ maxWidth: '40rem' }}>
            <Button
                variant="outlined"
                color="primary"
                startIcon={
                    <Icon fontSize="small">
                        <SaveSvg />
                    </Icon>
                }
            >
                Save
            </Button>
            <MuiCustomTextField
                label="Email"
                variant="original"
                placeholder="Enter email"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Icon>
                                <UserSvg />
                            </Icon>
                        </InputAdornment>
                    )
                }}
            />
            <MuiCustomAutocomplete
                // open
                // freeSolo
                // forcePopupIcon
                fullWidth
                openOnFocus
                options={topFilmsRawData}
                getOptionLabel={(option) => {
                    return option.title;
                }}
                renderInput={(params) => (
                    <MuiCustomTextField
                        {...params}
                        variant="original"
                        label="Country"
                        placeholder="Select country"
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icon>
                                        <SearchSvg />
                                    </Icon>
                                </InputAdornment>
                            )
                        }}
                    />
                )}
            />
        </Stack>
    );
};
