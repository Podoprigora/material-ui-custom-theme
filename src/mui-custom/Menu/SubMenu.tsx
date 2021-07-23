import React, { useCallback, useEffect, useState } from 'react';
import {
    MenuList,
    MenuListProps,
    ListItemText,
    ListItemIcon,
    MenuItemProps,
    MenuItem,
    Icon,
    useEventCallback
} from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import _throttle from 'lodash/throttle';

import { useMuiCustomMenu } from './Menu';
import { MuiCustomSubMenuList } from './SubMenuList';

interface MuiCustomSubMenuProps extends MenuItemProps {
    children?: React.ReactElement | React.ReactElement[];
    title?: string;
    renderTitle?: () => React.ReactElement;
}

export const MuiCustomSubMenu = (props: MuiCustomSubMenuProps) => {
    const { title, renderTitle, children, ...other } = props;

    const [anchorEl, setAnchorEl] = useState<HTMLLIElement | null>(null);
    const [open, setOpen] = useState(false);
    // const containerRef = useRef<HTMLDiv>();

    const { isParentOpen } = useMuiCustomMenu();

    const handleItemMouseDown = useEventCallback((ev: React.MouseEvent<HTMLDivElement>) => {
        ev.preventDefault();

        // anchorEl?.focus();
        setOpen(true);
    });

    const handleItemMouseEnter = useEventCallback((ev: React.MouseEvent<HTMLDivElement>) => {
        console.log('item mouse enter');
        setOpen(true);
    });

    const handleItemMouseLeave = useCallback((ev: React.MouseEvent<HTMLDivElement>) => {
        ev.preventDefault();

        console.log('item mouse leave ', ev.target);
        setOpen(false);
    }, []);

    const handleMenuItemMouseLeave = useEventCallback((ev: React.MouseEvent<HTMLLIElement>) => {
        ev.preventDefault();
        ev.stopPropagation();
        console.log('menu item mouse leave');
    });

    const handleItemFocus = useEventCallback((ev: React.FocusEvent<HTMLDivElement>) => {
        // console.log('focus item', ev.target);
        // setOpen(true);
    });

    const handleItemBlur = useEventCallback((ev: React.FocusEvent) => {
        console.log('item blur', ev.target);
        // console.log(ev.currentTarget);
        // setOpen(false);
    });

    const handleCloseMenu = useEventCallback(() => {
        setOpen(false);
        anchorEl?.focus();
        // anchorEl?.blur();
    });

    useEffect(() => {
        if (isParentOpen) {
            return () => {
                setOpen(false);
            };
        }

        return undefined;
    }, [isParentOpen]);

    return (
        <div
            // role="button"
            // role="menuitem"
            // tabIndex={0}
            // onMouseDown={handleItemMouseDown}
            onMouseEnter={handleItemMouseEnter}
            onMouseLeave={handleItemMouseLeave}
            // onClick={handleItemClick}
            // onFocus={handleItemFocus}
            // onBlur={handleItemBlur}
        >
            <MenuItem {...other} onMouseLeave={handleMenuItemMouseLeave} ref={setAnchorEl}>
                <ListItemText>{title}</ListItemText>
                <ListItemIcon>
                    <Icon fontSize="xsmall">
                        <KeyboardArrowRight />
                    </Icon>
                </ListItemIcon>
            </MenuItem>
            <MuiCustomSubMenuList open={open} anchorEl={anchorEl} onClose={handleCloseMenu}>
                {children}
            </MuiCustomSubMenuList>
        </div>
    );
};
