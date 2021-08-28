import React, { HTMLAttributes, useMemo } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Autocomplete, Avatar, Button, Icon, InputAdornment, Stack } from '@material-ui/core';
import { MuiCustomTextField } from '@mui-custom';
import {
    FilmSvg,
    SaveSvg,
    SearchSvg,
    UserPlusSvg,
    UsersSvg,
    UserSvg
} from '../../assets/svg-icons/feather';

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
            <MuiCustomAutocomplete
                // open
                fullWidth
                openOnFocus
                options={topFilmsRawData.slice(0, 25)}
                getOptionLabel={(option) => {
                    return option.title;
                }}
                renderInput={(params) => (
                    <MuiCustomTextField
                        {...params}
                        variant="filled"
                        label="Favorite film"
                        // placeholder="Select film"
                        // InputProps={{
                        //     ...params.InputProps,
                        //     startAdornment: (
                        //         <InputAdornment position="start">
                        //             <Icon>
                        //                 <SearchSvg />
                        //             </Icon>
                        //         </InputAdornment>
                        //     )
                        // }}
                    />
                )}
                renderOption={(params, option) => {
                    const { title, year, image } = option;

                    return (
                        <li
                            {...params}
                            className="MuiMenuItem-root MuiMenuItem-gutters MuiCustomAutocomplete-listItem"
                        >
                            <div className="MuiListItemAvatar-root">
                                {image ? (
                                    <Avatar
                                        src={image}
                                        imgProps={{ loading: 'lazy', alt: title }}
                                        variant="rounded"
                                    />
                                ) : (
                                    <Avatar variant="rounded">
                                        <Icon fontSize="large">
                                            <FilmSvg />
                                        </Icon>
                                    </Avatar>
                                )}
                            </div>
                            <div className="MuiListItemText-root MuiListItemText-multiline">
                                <div className="MuiListItemText-primary">{title}</div>
                                <div className="MuiListItemText-secondary">{year}</div>
                            </div>
                        </li>
                    );
                }}
            />
        </Stack>
    );
};
