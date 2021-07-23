import React, { useCallback, useMemo } from 'react';
import {
    Menu as MuiMenu,
    MenuProps as MuiMenuProps,
    MenuList,
    Paper,
    Popper,
    PopperProps as MuiPopperProps,
    ClickAwayListener,
    useEventCallback
} from '@material-ui/core';

import { createCtx } from '../utils/createCtx';

export interface MuiCustomMenuProps extends MuiPopperProps {
    onClose: () => void;
}

type MuiCustomMenuContextValue = {
    isParentOpen: boolean;
};

const MuiCustomMenuContext = createCtx<MuiCustomMenuContextValue>();

export const useMuiCustomMenu = MuiCustomMenuContext.useContext;

export const MuiCustomMenu = React.forwardRef<HTMLDivElement, MuiCustomMenuProps>(
    function MuiCustomMenu(props, forwardedRef) {
        const { open, anchorEl, children, onClose } = props;

        // console.log(props);

        const handleClickAway = useCallback(
            (ev: MouseEvent | TouchEvent) => {
                if (open && ev.target !== anchorEl && onClose) {
                    onClose();
                }
            },
            [open, anchorEl, onClose]
        );

        const popperProps = useMemo<MuiPopperProps>(() => {
            return {
                open,
                anchorEl,
                placement: 'bottom-start'
            };
        }, [anchorEl, open]);

        const contextValue = useMemo<MuiCustomMenuContextValue>(() => {
            return {
                isParentOpen: open
            };
        }, [open]);

        return (
            <MuiCustomMenuContext.Provider value={contextValue}>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Popper {...popperProps}>
                        <div className="MuiMenu-root">
                            <Paper elevation={8}>
                                <MenuList autoFocus>{children}</MenuList>
                            </Paper>
                        </div>
                    </Popper>
                </ClickAwayListener>
            </MuiCustomMenuContext.Provider>
        );
    }
);
