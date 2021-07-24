import React, { useMemo } from 'react';

import { MenuList as MuiMenuList, MenuListProps as MuiListProps } from '@material-ui/core';
import clsx from 'clsx';
import { MuiCustomColorListItem } from './ColorListItem';

export interface MuiCustomColorListProps extends Omit<MuiListProps, 'children'> {
    colorPalette?: string[];
    selected?: string;
    selectedIndex?: number;
}

// prettier-ignore
const defaultColorPalette = [
    '#ab7361', '#cf6d67', '#f74031', '#f95b45', '#fe7844', '#fdae54', 
    '#41d695', '#13a768', '#79d155', '#b1dc75', '#f9ea8c', '#f8d270', 
    '#92e1c1', '#a0e0e6', '#a1c5e5', '#5085e3', '#9d9bfb', '#bb99fb', 
    '#5f6368', '#cabdbf', '#cca6ac', '#f692b2', '#ce74e2', '#a679de'
];

export const MuiCustomColorList = React.forwardRef<HTMLUListElement, MuiCustomColorListProps>(
    function MuiCustomColorList(props, forwardedRef) {
        const {
            className,
            colorPalette = [],
            selected: selectedProp,
            selectedIndex: selectedIndexProp,
            ...other
        } = props;

        const items = useMemo(() => {
            const colors = colorPalette.length > 0 ? colorPalette : defaultColorPalette;

            return colors.map((color, index) => {
                const selected = selectedProp === color || selectedIndexProp === index;

                return <MuiCustomColorListItem key={index} color={color} selected={selected} />;
            });
        }, [colorPalette, selectedProp, selectedIndexProp]);

        return (
            <MuiMenuList
                {...other}
                className={clsx('MuiCustomColorList', className)}
                ref={forwardedRef}
            >
                {items}
            </MuiMenuList>
        );
    }
);
