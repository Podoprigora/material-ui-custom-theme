import React from 'react';

import {
    IconButton as MuiIconButton,
    IconButtonProps as MuiIconButtonProps
} from '@material-ui/core';

export type IconButtonProps = MuiIconButtonProps;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
    props,
    forwardedRef
) {
    return <MuiIconButton {...props} ref={forwardedRef} />;
});
