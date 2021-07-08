import React from 'react';
import clsx from 'clsx';

import Simplebar, { Props as SimplebarProps } from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export type MuiCustomSimplebarProps = SimplebarProps;

export const MuiCustomSimplebar = React.forwardRef<Simplebar, SimplebarProps>(
    function MuiCustomSimplebar(props, forwardedRef) {
        const { children, className, ...other } = props;

        return (
            <Simplebar
                className={clsx('simplebar-custom', className)}
                {...other}
                ref={forwardedRef}
            >
                {children}
            </Simplebar>
        );
    }
);
