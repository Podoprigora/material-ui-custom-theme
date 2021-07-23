import React, { useCallback, useEffect, useRef, useState } from 'react';
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
    const menuItemRef = useRef<HTMLLIElement | null>(null);
    const handleMenuItemRef = useForkRef<HTMLLIElement>(menuItemRef, setAnchorEl);
    const itemContainerRef = useRef<HTMLDivElement>(null);
    const closeTimerRef = useRef<number | undefined>();

    const { isParentOpen } = useMuiCustomMenu();

    const handleItemMouseEnter = useEventCallback(() => {
        clearTimeout(closeTimerRef.current);
        setOpen(true);
    });

    const handleItemMouseLeave = useCallback(() => {
        closeTimerRef.current = setTimeout(() => {
            setOpen(false);
        }, 50);
    }, []);

    const handleItemKeyDown = useEventCallback((ev: React.KeyboardEvent<HTMLDivElement>) => {
        if (ev.key === 'ArrowRight') {
            setOpen(true);
        }
    });

    const handleCloseMenu = useEventCallback(() => {
        setOpen(false);
        itemContainerRef.current?.focus();
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
            role="menuitem"
            tabIndex={0}
            className="MuiCustomSubMenuItem"
            onMouseEnter={handleItemMouseEnter}
            onMouseLeave={handleItemMouseLeave}
            onKeyDown={handleItemKeyDown}
            ref={itemContainerRef}
        >
            <MenuItem {...other} ref={handleMenuItemRef}>
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
