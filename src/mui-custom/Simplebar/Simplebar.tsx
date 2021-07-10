import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import Simplebar, { Props as SimplebarProps } from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export interface MuiCustomSimplebarProps extends SimplebarProps {
    scrollableNodeHandler?: (el: HTMLElement | null) => void;
}

export type MuiCustomSimplebarRef = Simplebar;

export const MuiCustomSimplebar = React.forwardRef<Simplebar, MuiCustomSimplebarProps>(
    function MuiCustomSimplebar(props, forwardedRef) {
        const {
            children,
            className,
            autoHide = false,
            scrollbarMinSize = 50,
            scrollableNodeHandler,
            ...other
        } = props;
        const [scrollbarRef, setScrollbarRef] = useState<HTMLElement | null>(null);

        useEffect(() => {
            if (scrollableNodeHandler) {
                scrollableNodeHandler(scrollbarRef);
            }
        }, [scrollbarRef, scrollableNodeHandler]);

        return (
            <Simplebar
                className={clsx('simplebar-custom', className)}
                autoHide={autoHide}
                scrollbarMinSize={scrollbarMinSize}
                scrollableNodeProps={{ ref: setScrollbarRef }}
                {...other}
                ref={forwardedRef}
            >
                {children}
            </Simplebar>
        );
    }
);
