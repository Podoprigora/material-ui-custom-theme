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
    const { className: classNameProp, textJustify, ...other } = props;

    const className = useMemo(() => {
        return clsx('MuiCustomOriginalInputLabel', classNameProp, {
            'MuiCustomOriginalInputLabel-justifyEnd': textJustify === 'end'
        });
    }, [classNameProp, textJustify]);

    return <MuiFormLabel {...other} className={className} ref={forwardedRef} />;
});
