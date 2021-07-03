import React from 'react';
import {
    ButtonGroup as MuiButtonGroup,
    ButtonGroupProps as MuiButtonGroupProps
} from '@material-ui/core';

export type ButtonGroupProps = MuiButtonGroupProps;

export const ButtonGroup = (props: ButtonGroupProps) => {
    return <MuiButtonGroup {...props} />;
};
