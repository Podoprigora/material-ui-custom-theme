import React, { HTMLAttributes, useMemo } from 'react';
import clsx from 'clsx';
import {
    AutocompleteProps,
    Icon,
    IconButton,
    InputAdornment,
    useAutocomplete
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { ChevronDownSvg } from '../../assets/svg-icons/feather';

export type MuiCustomAutocompleteProps<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
> = AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>;

function MuiCustomAutocompleteWithRef<
    T,
    Multiple extends boolean | undefined = undefined,
    DisableClearable extends boolean | undefined = undefined,
    FreeSolo extends boolean | undefined = undefined
>(
    props: MuiCustomAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    forwardedRef: React.Ref<HTMLDivElement>
) {
    const {
        renderInput,
        freeSolo = false,
        forcePopupIcon = 'auto',
        className,
        disabled = false,
        disableClearable = false,

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

    // console.log({ hasPopupIcon, hasClearIcon });

    // console.log({
    //     getRootProps: getRootProps(),
    //     getInputProps: getInputProps(),
    //     getPopupIndicatorProps: getPopupIndicatorProps(),
    //     dirty
    // });

    console.log({ groupedOptions });

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

    return (
        <div
            className={clsx('MuiCustomAutocomplete', className)}
            {...getRootProps()}
            ref={forwardedRef}
        >
            {inputElement}
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
