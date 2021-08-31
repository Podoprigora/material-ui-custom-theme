import React from 'react';
import clsx from 'clsx';

import {
    AutocompleteProps,
    CircularProgress,
    Icon,
    IconButton,
    InputAdornment,
    useAutocomplete
} from '@material-ui/core';

import { Clear } from '@material-ui/icons';
import { ChevronDownSvg } from '../../assets/svg-icons/feather';

import { MuiCustomAutocompleteListItem } from './AutocompleteListItem';
import { MuiCustomAutocompleteList, MuiCustomAutocompleteListProps } from './AutocompleteList';
import {
    MuiCustomAutocompletePopper,
    MuiCustomAutocompletePopperProps
} from './AutocompletePopper';
import { MuiCustomAutocompleteListItemText } from './AutocompleteListItemText';

type DefaultOption = { label: string } | string;

export interface MuiCustomAutocompleteProps<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
    loading?: boolean;
    remoteFilter?: boolean;
    ListProps?: MuiCustomAutocompleteListProps &
        Pick<MuiCustomAutocompletePopperProps, 'autoWidth'>;
}

function defaultGetOptionLabel(option: DefaultOption) {
    if (typeof option === 'string') {
        return option;
    }

    return option?.label ?? '';
}

function MuiCustomAutocompleteWithRef<
    T extends DefaultOption,
    Multiple extends boolean | undefined = undefined,
    DisableClearable extends boolean | undefined = undefined,
    FreeSolo extends boolean | undefined = undefined
>(
    props: MuiCustomAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    forwardedRef: React.Ref<HTMLDivElement>
) {
    const {
        renderInput,
        renderOption: renderOptionProp,
        getOptionLabel = defaultGetOptionLabel,
        loading,
        remoteFilter,
        filterOptions = remoteFilter ? (x) => x : undefined,
        freeSolo = false,
        forcePopupIcon = 'auto',
        className,
        disabled = false,
        disableClearable = false,
        fullWidth = false,
        ListProps,

        clearIcon = <Clear />,
        popupIcon = (
            <Icon>
                <ChevronDownSvg />
            </Icon>
        )
    } = props;

    const {
        getRootProps,
        getInputProps,
        getInputLabelProps,
        getClearProps,
        getPopupIndicatorProps,
        getListboxProps,
        getOptionProps,

        id,
        value,
        dirty,
        focused,
        inputValue,
        popupOpen,
        anchorEl,
        setAnchorEl,
        groupedOptions
    } = useAutocomplete({
        filterOptions,
        ...props,
        componentName: 'MuiCustomAutocomplete'
    });

    const hasClearIcon = !disableClearable && !disabled && dirty;
    const hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;

    const inputStartAdornment: React.ReactNode = null;
    const inputEndAdornment: React.ReactNode = (hasClearIcon || hasPopupIcon || loading) && (
        <InputAdornment position="end">
            {loading ? <CircularProgress /> : null}
            {hasClearIcon && !loading ? (
                <IconButton
                    size="small"
                    className="MuiIconButton-dense MuiIconButton-circular"
                    {...(getClearProps() as unknown)}
                >
                    {clearIcon}
                </IconButton>
            ) : null}
            {hasPopupIcon && !loading ? (
                <IconButton
                    size="small"
                    className="MuiIconButton-dense MuiIconButton-circular"
                    sx={{ ...(popupOpen && { transform: 'rotate(180deg)' }) }}
                    {...(getPopupIndicatorProps() as unknown)}
                >
                    {popupIcon}
                </IconButton>
            ) : null}
        </InputAdornment>
    );

    const inputElement = renderInput({
        id,
        disabled,
        fullWidth: true,
        size: undefined,
        InputLabelProps: getInputLabelProps(),
        InputProps: {
            ref: setAnchorEl,
            className: 'MuiCustomAutocomplete-inputBase',
            startAdornment: inputStartAdornment,
            endAdornment: inputEndAdornment
        },
        inputProps: {
            ...getInputProps()
        }
    });

    const defaultRenderOption: typeof renderOptionProp = (params, option) => (
        <MuiCustomAutocompleteListItem {...params}>
            <MuiCustomAutocompleteListItemText>
                {getOptionLabel(option)}
            </MuiCustomAutocompleteListItemText>
        </MuiCustomAutocompleteListItem>
    );
    const renderOption = renderOptionProp || defaultRenderOption;

    const renderListOption = (option: T, index: number) => {
        const optionProps = getOptionProps({ option, index });

        return renderOption(optionProps, option, {
            selected: !!optionProps['aria-selected'],
            inputValue
        });
    };

    const shouldDisplayList = groupedOptions.length > 0;
    const { autoWidth: paperAutoWidth, ...otherListProps } = ListProps || {};

    return (
        <div
            className={clsx('MuiCustomAutocomplete', className, {
                'MuiCustomAutocomplete-fullWidth': fullWidth
            })}
            {...getRootProps()}
            ref={forwardedRef}
        >
            {inputElement}

            <MuiCustomAutocompletePopper
                open={popupOpen}
                anchorEl={anchorEl}
                autoWidth={paperAutoWidth}
            >
                {shouldDisplayList && (
                    <MuiCustomAutocompleteList {...getListboxProps()} {...otherListProps}>
                        {groupedOptions.map((option, index) => {
                            return renderListOption(option as T, index);
                        })}
                    </MuiCustomAutocompleteList>
                )}
            </MuiCustomAutocompletePopper>
        </div>
    );
}

export const MuiCustomAutocomplete = React.forwardRef(MuiCustomAutocompleteWithRef) as <
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
>(
    props: MuiCustomAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> & {
        ref?: React.Ref<HTMLDivElement>;
    }
) => JSX.Element | null;
