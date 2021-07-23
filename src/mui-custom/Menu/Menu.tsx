import React, { useCallback, useMemo } from 'react';
import {
    MenuProps as MuiMenuProps,
    MenuList,
    MenuListProps as MuiMenuListProps,
    Paper,
    PaperProps as MuiPaperProps,
    Popper,
    PopperProps as MuiPopperProps,
    ClickAwayListener,
    useEventCallback,
    Grow,
    useTheme
} from '@material-ui/core';

import { createCtx } from '../utils/createCtx';

export interface MuiCustomMenuProps extends MuiMenuListProps {
    children: React.ReactElement | React.ReactElement[];
    open: boolean;
    anchorEl: MuiPopperProps['anchorEl'];
    placement?: MuiPopperProps['placement'];
    transition?: boolean;
    TransitionProps?: MuiMenuProps['TransitionProps'];
    PaperProps?: MuiPaperProps;
    onClose?: () => void;
}

type MuiCustomMenuContextValue = {
    isParentOpen: boolean;
};

const MuiCustomMenuContext = createCtx<MuiCustomMenuContextValue>();

export const useMuiCustomMenu = MuiCustomMenuContext.useContext;

export const MuiCustomMenu = React.forwardRef<HTMLDivElement, MuiCustomMenuProps>(
    function MuiCustomMenu(props, forwardedRef) {
        const {
            open,
            anchorEl,
            children,
            placement = 'bottom-start',
            transition = true,
            PaperProps: PaperPropsProp,
            TransitionProps: TransitionPropsProp,
            onClose,
            ...other
        } = props;

        const theme = useTheme();
        const menuDefaultProps = theme.components?.MuiMenu?.defaultProps || {};

        const handleClose = useEventCallback(() => {
            if (onClose) {
                onClose();
            }

            if (anchorEl) {
                (anchorEl as HTMLElement).focus();
            }
        });

        const handleClickAway = useCallback(
            (ev: MouseEvent | TouchEvent) => {
                if (open && ev.target !== anchorEl) {
                    handleClose();
                }
            },
            [open, anchorEl, handleClose]
        );

        const handleKeyDown = useCallback(
            (ev: React.KeyboardEvent<HTMLDivElement>) => {
                if (ev.key === 'Escape') {
                    handleClose();
                }
            },
            [handleClose]
        );

        const popperProps = useMemo<MuiPopperProps>(
            () => ({
                placement,
                open,
                anchorEl,
                transition
            }),
            [anchorEl, open, placement, transition]
        );

        const contextValue = useMemo<MuiCustomMenuContextValue>(() => {
            return {
                isParentOpen: open
            };
        }, [open]);

        const TransitionComponent = menuDefaultProps.TransitionComponent || Grow;
        const transitionTimeout = menuDefaultProps.TransitionProps?.timeout || {
            exit: 120,
            enter: 220
        };

        return (
            <MuiCustomMenuContext.Provider value={contextValue}>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Popper {...popperProps} ref={forwardedRef}>
                        {({ TransitionProps }) => {
                            return (
                                <TransitionComponent
                                    {...TransitionProps}
                                    timeout={transitionTimeout}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...TransitionPropsProp}
                                >
                                    <div className="MuiMenu-root MuiCustomMenu">
                                        <Paper
                                            elevation={8}
                                            {...PaperPropsProp}
                                            onKeyDown={handleKeyDown}
                                        >
                                            <MenuList autoFocus {...other}>
                                                {children}
                                            </MenuList>
                                        </Paper>
                                    </div>
                                </TransitionComponent>
                            );
                        }}
                    </Popper>
                </ClickAwayListener>
            </MuiCustomMenuContext.Provider>
        );
    }
);
