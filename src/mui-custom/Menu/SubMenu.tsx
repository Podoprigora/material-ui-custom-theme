import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    ListItemText,
    ListItemIcon,
    MenuItemProps,
    MenuItem,
    Icon,
    useEventCallback,
    useForkRef
} from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import clsx from 'clsx';

import { useMountedRef } from '../utils';
import { useMuiCustomMenu } from './Menu';
import { MuiCustomSubMenuList } from './SubMenuList';

interface MuiCustomSubMenuProps extends Omit<MenuItemProps, 'title'> {
    children?: React.ReactElement | React.ReactElement[];
    title: string | React.ReactElement;
}

export const MuiCustomSubMenu = (props: MuiCustomSubMenuProps) => {
    const { title, children, ...other } = props;

    const [anchorEl, setAnchorEl] = useState<HTMLLIElement | null>(null);
    const [open, setOpen] = useState(false);
    const menuItemRef = useRef<HTMLLIElement | null>(null);
    const handleMenuItemRef = useForkRef<HTMLLIElement>(menuItemRef, setAnchorEl);
    const itemContainerRef = useRef<HTMLDivElement>(null);
    const closeTimerRef = useRef<number | undefined>();
    const isMountedRef = useMountedRef();

    const { isParentOpen } = useMuiCustomMenu();

    const handleItemMouseEnter = useEventCallback(() => {
        clearTimeout(closeTimerRef.current);
        setOpen(true);
    });

    const handleItemMouseLeave = useCallback(() => {
        closeTimerRef.current = setTimeout(() => {
            if (isMountedRef.current) {
                setOpen(false);
            }
        }, 100);
    }, [isMountedRef]);

    const handleItemKeyDown = useEventCallback((ev: React.KeyboardEvent<HTMLDivElement>) => {
        if (ev.key === 'ArrowRight') {
            setOpen(true);
        }
    });

    const handleCloseMenu = useEventCallback(() => {
        setOpen(false);
        itemContainerRef.current?.focus();
    });

    const handleMenuItemClick = useEventCallback((ev: React.MouseEvent) => {
        ev.stopPropagation();
    });

    const handleMenuItemMouseDown = useEventCallback((ev: React.MouseEvent) => {
        ev.preventDefault();
    });

    const titleElement = useMemo(() => {
        if (typeof title === 'string') {
            return <ListItemText>{title}</ListItemText>;
        }

        return title;
    }, [title]);

    return (
        <div
            role="menuitem"
            tabIndex={0}
            className="MuiCustomSubMenuItem"
            onMouseEnter={handleItemMouseEnter}
            onMouseLeave={handleItemMouseLeave}
            onKeyDown={handleItemKeyDown}
            ref={itemContainerRef}
        >
            <MenuItem
                {...other}
                className={clsx({ 'Mui-focusVisible': open })}
                onMouseDown={handleMenuItemMouseDown}
                onClick={handleMenuItemClick}
                ref={handleMenuItemRef}
            >
                {titleElement}
                <ListItemIcon>
                    <Icon fontSize="xsmall">
                        <KeyboardArrowRight />
                    </Icon>
                </ListItemIcon>
            </MenuItem>
            <MuiCustomSubMenuList
                open={open && isParentOpen}
                anchorEl={anchorEl}
                onClose={handleCloseMenu}
            >
                {children}
            </MuiCustomSubMenuList>
        </div>
    );
};
