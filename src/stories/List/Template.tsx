import React from 'react';

import { List as MuiList, ListProps as MuiListProps } from '@material-ui/core';

export type ListProps = MuiListProps;

export const List = (props: ListProps) => {
    return <MuiList {...props} />;
};
