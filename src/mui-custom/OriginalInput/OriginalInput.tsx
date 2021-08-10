import React from 'react';
import clsx from 'clsx';
import { InputBase as MuiInputBase, InputBaseProps as MuiInputBaseProps } from '@material-ui/core';

export type MuiCustomOriginalInputProps = MuiInputBaseProps;

export const MuiCustomOriginalInput = React.forwardRef<HTMLDivElement, MuiCustomOriginalInputProps>(
    function MuiCustomOriginalInput(props, forwardedRef) {
        const { className, ...other } = props;

        return (
            <MuiInputBase
                {...other}
                className={clsx('MuiCustomOriginalInput', className)}
                ref={forwardedRef}
            />
        );
    }
);
