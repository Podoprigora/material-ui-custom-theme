import React from 'react';

import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@material-ui/core';

export type ButtonProps = Omit<
    MuiButtonProps,
    | 'disableRipple'
    | 'disableFocusRipple'
    | 'centerRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'disableElevation'
    | 'focusVisibleClassName'
>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    props,
    forwardedRef
) {
    return (
        <MuiButton
            {...props}
            disableElevation
            disableRipple
            disableFocusRipple
            focusRipple={false}
            focusVisibleClassName="MuiButton-focusVisible"
            ref={forwardedRef}
        />
    );
});
