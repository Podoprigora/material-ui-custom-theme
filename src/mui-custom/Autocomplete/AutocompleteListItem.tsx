import React from 'react';

export const MuiCustomAutocompleteListItem = (props: React.HTMLAttributes<HTMLLIElement>) => {
    const { className, children, ...other } = props;

    return (
        <li
            {...other}
            className="MuiMenuItem-root MuiMenuItem-gutters MuiCustomAutocomplete-listItem"
        >
            <div className="MuiListItemText-root">{children}</div>
        </li>
    );
};
