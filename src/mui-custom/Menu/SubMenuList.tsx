import React, { useMemo } from 'react';
import {
    ListProps as MuiListProps,
    MenuList,
    Paper,
    Popper,
    PopperProps as MuiPopperProps,
    Fade,
    useEventCallback
} from '@material-ui/core';

interface MuiCustomSubMenuListProps extends MuiListProps {
    open: MuiPopperProps['open'];
    anchorEl: MuiPopperProps['anchorEl'];
    PopperProps?: Omit<MuiPopperProps, 'children' | 'open' | 'anchorEl'>;
    onClose?: () => void;
}

export const MuiCustomSubMenuList = (props: MuiCustomSubMenuListProps) => {
    const { open, anchorEl, children, PopperProps: PopperPropsProp, onClose, ...other } = props;

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

    return (
        <Popper {...popperProps}>
            {({ TransitionProps }) => {
                return (
                    <Fade {...TransitionProps} timeout={{ exit: 120, enter: 220 }}>
                        <div className="MuiMenu-root">
                            <Paper elevation={8}>
                                <MenuList {...other} autoFocus onKeyDown={handleKeyDown}>
                                    {children}
                                </MenuList>
                            </Paper>
                        </div>
                    </Fade>
                );
            }}
        </Popper>
    );
};
