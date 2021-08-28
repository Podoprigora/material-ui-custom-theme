import React from 'react';
import { setRef, useEventCallback } from '@material-ui/core';
import { MuiCustomSimplebar } from '@mui-custom/Simplebar';

type MuiCustomAutocompleteListProps = React.ComponentPropsWithoutRef<'ul'>;

export const MuiCustomAutocompleteList = React.forwardRef<
    HTMLDivElement,
    MuiCustomAutocompleteListProps
>(function MuiCustomAutocompleteList(props, forwardedRef) {
    const { children, ...other } = props;

    const handleScrollbarRef = useEventCallback((node: HTMLElement | null) => {
        if (node) {
            // NOTE: This trick required to proper scrollbar positioning.
            // useAutocomplete: https://github.com/mui-org/material-ui/blob/5d390303f3d88c750bfb2199989d5aa068f8977e/packages/material-ui-unstyled/src/AutocompleteUnstyled/useAutocomplete.js#L323
            node.setAttribute('role', 'listbox');
            setRef(forwardedRef, node as HTMLDivElement);
        }
    });

    return (
        <MuiCustomSimplebar
            className="MuiCustomAutocomplete-simplebar"
            scrollableNodeHandler={handleScrollbarRef}
        >
            <ul {...other} className="MuiList-root MuiList-padding MuiCustomAutocomplete-list">
                {children}
            </ul>
        </MuiCustomSimplebar>
    );
});
