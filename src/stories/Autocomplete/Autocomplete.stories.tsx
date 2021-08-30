import React, { HTMLAttributes, useMemo, useState, useEffect, useCallback, useRef } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import _throttle from 'lodash/throttle';
import _debonce from 'lodash/debounce';

import {
    Autocomplete,
    AutocompleteInputChangeReason,
    Avatar,
    Button,
    Icon,
    InputAdornment,
    CircularProgress,
    Stack,
    useEventCallback,
    createFilterOptions
} from '@material-ui/core';

import { MuiCustomTextField, MuiCustomAutocomplete, MuiCustomHighlighter } from '@mui-custom';
import { useMountedRef, fakeRequest, loadScript } from '@mui-custom/utils';

import {
    FilmSvg,
    MapPinSvg,
    SaveSvg,
    SearchSvg,
    UserPlusSvg,
    UsersSvg,
    UserSvg
} from '../../assets/svg-icons/feather';

import topFilmsRawData from '../assets/data/top-films.json';
import countriesRawData from '../assets/data/countries.json';

export default {
    title: 'mui-custom/Autocomplete',
    component: Autocomplete
} as Meta;

interface Film {
    title: string;
    year: number;
    image?: string;
}

// const AutocompleteListItem = (props: HTMLAttributes<HTMLLIElement>) => {
//     const { className, children, ...other } = props;

//     return (
//         <li {...other} className="MuiMenuItem-root MuiMenuItem-gutters">
//             <div className="MuiListItemText-root">{children}</div>
//         </li>
//     );
// };

// export const Default: Story = () => {
//     return (
//         <div style={{ maxWidth: '40rem' }}>
//             <Autocomplete
//                 // open
//                 options={topFilmsRawData}
//                 getOptionLabel={(option) => option.title}
//                 renderInput={(params) => (
//                     <MuiCustomTextField {...params} variant="original" label="Films" />
//                 )}
//                 renderOption={(params, option) => {
//                     const { className, ...other } = params;
//                     const { title } = option;

//                     return <AutocompleteListItem {...other}>{title}</AutocompleteListItem>;
//                 }}
//             />
//         </div>
//     );
// };

export const AsynchronousRequest: Story = () => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<readonly Film[]>([]);
    const [loading, setLoading] = useState(false);
    const isMountedRef = useMountedRef();

    const fetch = useCallback(
        async (query?: string) => {
            setLoading(true);

            let response = await fakeRequest<Film[]>(topFilmsRawData, {
                delay: 1000
            });

            if (query) {
                const filterFn = createFilterOptions<Film>({ limit: 25 });

                response = filterFn(response, {
                    inputValue: query,
                    getOptionLabel: (option) => option.title
                });
            }

            if (isMountedRef.current) {
                setOpen(true);
                setOptions(response);
                setLoading(false);
            }
        },
        [isMountedRef]
    );

    const handleClose = useEventCallback(() => {
        setOpen(false);
    });

    const handleInputChange = useMemo(() => {
        return _throttle(
            (ev: React.SyntheticEvent, value: string, reason: AutocompleteInputChangeReason) => {
                if (reason === 'input' && value.length >= 3) {
                    fetch(value);
                } else {
                    setOpen(false);
                }
            },
            600,
            { leading: false, trailing: true }
        );
    }, [fetch]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Stack direction="column" alignItems="flex-start" spacing={10} sx={{ maxWidth: '40rem' }}>
            <MuiCustomAutocomplete
                open={open}
                fullWidth
                forcePopupIcon={false}
                onClose={handleClose}
                onInputChange={handleInputChange}
                options={options}
                getOptionLabel={(option) => {
                    return option.title;
                }}
                filterOptions={(x) => x} // To disable built-in filtering
                isOptionEqualToValue={(option, value) => option.title === value.title}
                renderInput={(params) => (
                    <MuiCustomTextField
                        {...params}
                        variant="standard"
                        label="Favorite film"
                        placeholder="Start typing: The ..."
                        helperText="Min length of query: 3 characters."
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {loading ? (
                                        <InputAdornment position="end">
                                            <CircularProgress />
                                        </InputAdornment>
                                    ) : (
                                        params.InputProps.endAdornment
                                    )}
                                </>
                            )
                        }}
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

// Google Map Place
// Docs:
// - https://developers.google.com/maps/documentation/javascript/places-autocomplete#add-autocomplete
// - https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletePrediction

export const GoogleMapPlace: Story = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState<google.maps.places.AutocompletePrediction[]>([]);
    const googlePlaceAutocompleteService = useRef<google.maps.places.AutocompleteService | null>(
        null
    );
    const inputValueRef = useRef('');
    const isMountedRef = useMountedRef();

    const fetchPlace = useMemo(() => {
        return _debonce((query: string) => {
            if (window?.google && !googlePlaceAutocompleteService.current) {
                googlePlaceAutocompleteService.current = new google.maps.places.AutocompleteService();
            }

            if (googlePlaceAutocompleteService.current) {
                console.log({ query });

                setLoading(true);
                googlePlaceAutocompleteService.current.getPlacePredictions(
                    { input: query },
                    (result) => {
                        if (!isMountedRef.current) {
                            return;
                        }

                        if (Array.isArray(result) && inputValueRef.current.length) {
                            setOptions(result);
                        } else {
                            setOptions([]);
                        }

                        setLoading(false);
                    }
                );
            }
        }, 600);
    }, [isMountedRef]);

    const handleInputValueChange = useEventCallback(
        (ev: React.SyntheticEvent, newValue: string) => {
            inputValueRef.current = newValue;

            if (newValue.length >= 3) {
                fetchPlace(newValue);
            } else {
                setOptions([]);
            }
        }
    );

    const handlePopupOpen = useEventCallback(() => {
        setOpen(true);
    });

    const handlePopupClose = useEventCallback(() => {
        setOpen(false);
    });

    useEffect(() => {
        loadScript(
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyBXw_smmk72DTrF1vabIzZ7-iNCUKoTiJ0&libraries=places',
            'google-map'
        );
    }, []);

    const shouldPopupOpen = open && options.length > 0;

    return (
        <div style={{ maxWidth: '40rem' }}>
            <MuiCustomAutocomplete
                open={shouldPopupOpen}
                fullWidth
                includeInputInList
                forcePopupIcon={false}
                options={options}
                filterOptions={(x) => x}
                getOptionLabel={(option) => {
                    return typeof option === 'string' ? option : option?.description;
                }}
                isOptionEqualToValue={(option, value) => {
                    return option.place_id.trim() === value.place_id.trim();
                }}
                renderInput={(inputProps) => {
                    return (
                        <MuiCustomTextField
                            {...inputProps}
                            variant="original"
                            placeholder="Search a location"
                            InputProps={{
                                ...inputProps.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon>
                                            <MapPinSvg />
                                        </Icon>
                                    </InputAdornment>
                                ),
                                endAdornment: loading ? (
                                    <InputAdornment position="end">
                                        <CircularProgress />
                                    </InputAdornment>
                                ) : (
                                    inputProps.InputProps.endAdornment
                                )
                            }}
                        />
                    );
                }}
                renderOption={(params, option, state) => {
                    const { structured_formatting } = option;
                    const primaryText = structured_formatting.main_text;
                    const secondaryText = structured_formatting.secondary_text;
                    const { inputValue } = state;

                    return (
                        <li
                            {...params}
                            className="MuiMenuItem-root MuiMenuItem-gutters MuiCustomAutocomplete-listItem"
                        >
                            <div className="MuiListItemIcon-root">
                                <Icon fontSize="small">
                                    <MapPinSvg />
                                </Icon>
                            </div>
                            <div className="MuiListItemText-root MuiListItemText-multiline">
                                <div className="MuiListItemText-primary">
                                    <MuiCustomHighlighter text={primaryText} query={inputValue} />
                                </div>
                                <div className="MuiListItemText-secondary">{secondaryText}</div>
                            </div>
                        </li>
                    );
                }}
                onOpen={handlePopupOpen}
                onClose={handlePopupClose}
                onInputChange={handleInputValueChange}
            />
        </div>
    );
};
