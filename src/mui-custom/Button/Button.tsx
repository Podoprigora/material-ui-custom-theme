import React from 'react';

import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@material-ui/core';

export interface ButtonProps extends MuiButtonProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    props,
    forwardedRef
) {
    return (
        <MuiButton
            disableRipple
            disableFocusRipple
            focusVisibleClassName="MuiButton-focusVisible"
            ref={forwardedRef}
            {...props}
        />
    );
});
