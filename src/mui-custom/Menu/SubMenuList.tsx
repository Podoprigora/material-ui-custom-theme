import React, { useMemo } from 'react';
import {
    ListProps as MuiListProps,
    MenuList,
    Paper,
    Popper,
    PopperProps as MuiPopperProps,
    PaperProps as MuiPaperProps,
    Fade,
    useEventCallback
} from '@material-ui/core';

export interface MuiCustomSubMenuListProps extends MuiListProps {
    open: MuiPopperProps['open'];
    anchorEl: MuiPopperProps['anchorEl'];
    PopperProps?: Omit<MuiPopperProps, 'children' | 'open' | 'anchorEl'>;
    PaperProps?: MuiPaperProps;
    MenuListComponent?: React.ReactElement | null;
    onClose?: () => void;
}

export const MuiCustomSubMenuList = (props: MuiCustomSubMenuListProps) => {
    const {
        open,
        anchorEl,
        children,
        PopperProps: PopperPropsProp,
        PaperProps: PaperPropsProp,
        MenuListComponent,
        onClose,
        ...other
    } = props;

    const handleKeyDown = useEventCallback((ev: React.KeyboardEvent) => {
        ev.stopPropagation();

        if (ev.key === 'Escape' && onClose) {
            onClose();
        }
    });

    const popperProps = useMemo<MuiPopperProps>(() => {
        return {
            ...PopperPropsProp,
            transition: true,
            open,
            anchorEl,
            placement: 'right-start',
            disablePortal: true,
            popperOptions: {
                strategy: 'fixed'
            },
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 2]
                    }
                }
            ]
        };
    }, [open, anchorEl, PopperPropsProp]);

    let menuListElement: React.ReactElement | null = null;

    if (MenuListComponent === undefined) {
        menuListElement = (
            <MenuList autoFocus onKeyDown={handleKeyDown} {...other}>
                {children}
            </MenuList>
        );
    } else if (React.isValidElement(MenuListComponent)) {
        menuListElement = React.cloneElement(MenuListComponent, {
            onKeyDown: handleKeyDown
        });
    }

    return (
        <Popper {...popperProps}>
            {({ TransitionProps }) => {
                return (
                    <Fade {...TransitionProps} timeout={{ exit: 120, enter: 220 }}>
                        <div className="MuiMenu-root">
                            <Paper elevation={8} {...PaperPropsProp}>
                                {menuListElement}
                            </Paper>
                        </div>
                    </Fade>
                );
            }}
        </Popper>
    );
};
