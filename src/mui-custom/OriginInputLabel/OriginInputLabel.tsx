import React, { useMemo } from 'react';
import clsx from 'clsx';
import { FormLabel as MuiFormLabel, FormLabelProps as MuiFormLabelProps } from '@material-ui/core';

export interface MuiCustomOriginalInputLabelProps extends MuiFormLabelProps {
    textJustify?: 'start' | 'end';
}

export const MuiCustomOriginalInputLabel = React.forwardRef<
    HTMLLabelElement,
    MuiCustomOriginalInputLabelProps
>(function MuiCustomOriginalInputLabel(props, forwardedRef) {
    const { className, textJustify, ...other } = props;

    const classNames = useMemo(() => {
        return clsx('MuiCustomOriginalInputLabel', className, {
            'MuiCustomOriginalInputLabel-justifyEnd': textJustify === 'end'
        });
    }, [textJustify, className]);

    return <MuiFormLabel {...other} className={classNames} ref={forwardedRef} />;
});
