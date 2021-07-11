import React from 'react';
import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from '@material-ui/core';

export type BadgeProps = MuiBadgeProps;

export const Badge = (props: BadgeProps) => {
    return <MuiBadge {...props} />;
};
