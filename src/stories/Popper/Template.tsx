import React from 'react';
import { Popper as MuiPopper, PopperProps as MuiPopperProps } from '@material-ui/core';

export type PopperProps = MuiPopperProps;

export const Popper = React.forwardRef<HTMLDivElement, PopperProps>(function Popper(
    props,
    forwardedRef
) {
    return <MuiPopper {...props} ref={forwardedRef} />;
});
