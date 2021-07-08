import React from 'react';

import Simplebar, { Props as SimplebarProps } from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export type MuiCustomSimplebarProps = SimplebarProps;

export const MuiCustomSimplebar = React.forwardRef<Simplebar, SimplebarProps>(
    function MuiCustomSimplebar(props, forwardedRef) {
        const { children, ...other } = props;

        return (
            <Simplebar {...other} ref={forwardedRef}>
                {children}
            </Simplebar>
        );
    }
);
