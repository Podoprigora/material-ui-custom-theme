import React, { useMemo } from 'react';
import clsx from 'clsx';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@material-ui/core';

type ExtendedProps = Omit<MuiTextFieldProps, 'variant'>;

export interface MuiCustomTextFieldProps extends ExtendedProps {
    labelAlign?: 'top' | 'left';
    labelTextAlign?: 'left' | 'right';
}

export const MuiCustomTextField = React.forwardRef<HTMLDivElement, MuiCustomTextFieldProps>(
    function MuiCustomTextField(props, forwardedRef) {
        const {
            className,
            InputLabelProps: InputLabelPropsProp,
            InputProps: InputPropsProp,
            labelAlign = 'top',
            labelTextAlign = 'left',
            ...other
        } = props;

        const fieldControlClassNames = useMemo(() => {
            return clsx(className, 'MuiCustomFormControl', {
                'MuiCustomFormControl-labelAlignTop': labelAlign === 'top',
                'MuiCustomFormControl-labelAlignLeft': labelAlign === 'left'
            });
        }, [className, labelAlign]);

        const inputLabelProps = {
            ...InputLabelPropsProp,
            className: clsx(InputLabelPropsProp?.className, 'MuiCustomFormLabel', {
                'MuiCustomFormLabel-justifyEnd': labelTextAlign === 'right'
            })
        };

        const inputProps = {
            ...InputPropsProp,
            className: clsx(InputPropsProp?.className, 'MuiCustomInputBase')
        };

        return (
            <MuiTextField
                {...other}
                variant="standard"
                className={fieldControlClassNames}
                InputLabelProps={inputLabelProps}
                InputProps={inputProps}
                ref={forwardedRef}
            />
        );
    }
);
