import React from 'react';
import clsx from 'clsx';

import {
    AutocompleteProps,
    Icon,
    IconButton,
    InputAdornment,
    useAutocomplete,
    useEventCallback
} from '@material-ui/core';

import { Clear } from '@material-ui/icons';
import { ChevronDownSvg } from '../../assets/svg-icons/feather';

import { MuiCustomAutocompleteListItem } from './AutocompleteListItem';
import { MuiCustomAutocompleteList } from './AutocompleteList';
import { MuiCustomAutocompletePopper } from './AutocompletePopper';

type DefaultOption = { label: string } | string;

export type MuiCustomAutocompleteProps<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
> = AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>;

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
        freeSolo = false,
        forcePopupIcon = 'auto',
        className,
        disabled = false,
        disableClearable = false,
        fullWidth = false,

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
        ...props,
        componentName: 'MuiCustomAutocomplete'
    });

    const hasClearIcon = !disableClearable && !disabled && dirty;
    const hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;

    const inputStartAdornment: React.ReactNode = null;
    const inputEndAdornment: React.ReactNode = (hasClearIcon || hasPopupIcon) && (
        <InputAdornment position="end">
            {hasClearIcon ? (
                <IconButton
                    size="small"
                    className="MuiIconButton-dense MuiIconButton-circular"
                    {...(getClearProps() as unknown)}
                >
                    {clearIcon}
                </IconButton>
            ) : null}
            {hasPopupIcon ? (
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
            {getOptionLabel(option)}
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

    return (
        <div
            className={clsx('MuiCustomAutocomplete', className, {
                'MuiCustomAutocomplete-fullWidth': fullWidth
            })}
            {...getRootProps()}
            ref={forwardedRef}
        >
            {inputElement}

            <MuiCustomAutocompletePopper open={popupOpen} anchorEl={anchorEl}>
                {shouldDisplayList && (
                    <MuiCustomAutocompleteList {...getListboxProps()}>
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
