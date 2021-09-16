import React from 'react';
import { TableToggleAllRowsSelectedProps, HeaderProps } from 'react-table';
import { Checkbox, CheckboxProps } from '@material-ui/core';

export function getMuiCustomReactTableHeaderCheckboxCell(
    checkboxProps?: CheckboxProps
): React.ComponentType<HeaderProps<Record<string, unknown>>> {
    return (props) => {
        const { getToggleAllRowsSelectedProps } = props;
        const { title, ...otherCheckboxProps } = getToggleAllRowsSelectedProps
            ? getToggleAllRowsSelectedProps()
            : ({} as TableToggleAllRowsSelectedProps);

        return <Checkbox {...checkboxProps} {...otherCheckboxProps} />;
    };
}
