import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import {
    Button,
    Divider,
    Fade,
    Icon,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Typography
} from '@material-ui/core';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks';

import { KeyboardArrowDown } from '@material-ui/icons';
import { ChevronDownSvg, CopySvg, Edit2Svg, Trash2Svg } from '../../assets/svg-icons/feather';

export default {
    title: 'mui-custom/Menu',
    component: Menu
} as Meta;

export const Basic = () => {
    const popupState = usePopupState({ variant: 'popover', popupId: 'basicMenu' });

    return (
        <>
            <Button
                variant="outlined"
                color="inherit"
                endIcon={
                    <Icon fontSize="xsmall">
                        <KeyboardArrowDown />
                    </Icon>
                }
                {...bindTrigger(popupState)}
            >
                Basic menu
            </Button>
            <Menu {...bindMenu(popupState)}>
                <MenuItem>
                    <ListItemIcon>
                        <Icon fontSize="xsmall">
                            <Edit2Svg />
                        </Icon>
                    </ListItemIcon>
                    Edit
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Icon fontSize="xsmall">
                            <CopySvg />
                        </Icon>
                    </ListItemIcon>
                    Copy
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Icon fontSize="xsmall" color="error">
                            <Trash2Svg />
                        </Icon>
                    </ListItemIcon>
                    Delete
                </MenuItem>
            </Menu>
        </>
    );
};
