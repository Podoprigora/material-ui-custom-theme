import React from 'react';
import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@material-ui/core';

export type AvatarProps = MuiAvatarProps;

export const Avatar = React.forwardRef<HTMLDivElement, MuiAvatarProps>(function Avatar(
    props,
    forwardedRef
) {
    return <MuiAvatar {...props} ref={forwardedRef} />;
});
