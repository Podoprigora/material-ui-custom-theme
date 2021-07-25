import React from 'react';
import {
    MenuList,
    MenuListProps,
    MenuProps,
    Fade,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Divider,
    useEventCallback
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { useMuiCustomLinkedList } from './LinkedListContext';
import { MuiCustomLinkedListGroupKey } from './LinkedListTypes';

export interface MuiCustomLinkedListGroupProps {
    children: React.ReactNode;
    groupKey?: MuiCustomLinkedListGroupKey;
    TransitionComponent?: React.ElementType<MenuProps['TransitionProps']>;
    TransitionProps?: MenuProps['TransitionProps'];
    MenuListProps?: MenuListProps;
}

export const MuiCustomLinkedListGroup = React.forwardRef<
    HTMLUListElement,
    MuiCustomLinkedListGroupProps
>(function MuiCustomLinkedListGroup(props, forwardedRef) {
    const {
        children,
        groupKey,
        TransitionComponent: TransitionComponentProp,
        TransitionProps,
        MenuListProps: MenuListPropsProp,
        ...other
    } = props;

    const { onCloseGroup, getActiveGroup } = useMuiCustomLinkedList();
    const activeItem = getActiveGroup();

    const handleKeyDown = useEventCallback((ev: React.KeyboardEvent<HTMLUListElement>) => {
        if (ev.key === 'Escape') {
            if (groupKey) {
                ev.stopPropagation();
            }

            onCloseGroup();
        }

        if (MenuListPropsProp?.onKeyDown) {
            MenuListPropsProp.onKeyDown(ev);
        }
    });

    // Render

    if ((groupKey && activeItem?.key !== groupKey) || (!groupKey && activeItem)) {
        return null;
    }

    const TransitionComponent = TransitionComponentProp || Fade;

    return (
        <TransitionComponent
            timeout={{ enter: 250, exit: 0 }}
            unmountOnExit
            {...TransitionProps}
            {...other}
        >
            <MenuList {...MenuListPropsProp} onKeyDown={handleKeyDown} ref={forwardedRef}>
                {activeItem && [
                    <ListItem key="menu-list-header" aria-disabled tabIndex={-1}>
                        <ListItemIcon tabIndex={0}>
                            <IconButton onClick={onCloseGroup}>
                                <ArrowBack fontSize="large" />
                            </IconButton>
                        </ListItemIcon>
                        {activeItem?.title && (
                            <ListItemText disableTypography={false} primary={activeItem.title} />
                        )}
                    </ListItem>,
                    <Divider key="menu-list-divider" className="u-margin-b-4" />
                ]}

                {children}
            </MenuList>
        </TransitionComponent>
    );
});
