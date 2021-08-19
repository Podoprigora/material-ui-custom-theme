import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import clsx from 'clsx';

import {
    TextField,
    Select,
    MenuItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Icon,
    TextFieldProps,
    useEventCallback,
    InputAdornment,
    useTheme,
    ListSubheader,
    Paper,
    SelectProps,
    MenuProps,
    PaperProps
} from '@material-ui/core';
import { LabelRounded } from '@material-ui/icons';

import { MuiCustomPaperSimplebarProps, MuiCustomTextField } from '@mui-custom';

export default {
    title: 'mui-custom/Select',
    component: Select
} as Meta;

// Labels Select

const labelsData: { id: number; name: string; color?: string; group?: string }[] = [
    { id: 1, name: 'Important', color: '#36B4C4', group: 'Default' },
    { id: 2, name: 'Delivery', color: '#AD57A0', group: 'Default' },
    { id: 3, name: 'Sales', color: '#FFB800', group: 'Default' },
    { id: 4, name: 'Finance', color: '#00AC26', group: 'Default' },
    { id: 5, name: 'Custom 1', group: 'Custom' },
    { id: 6, name: 'Custom 2', group: 'Custom' },
    { id: 7, name: 'Custom 3 some long long text', group: 'Custom' },
    { id: 8, name: 'Custom 4', group: 'Custom' }
];

export const LabelsSelect: Story = () => {
    const [selected, setSelected] = useState<number | string>('');
    const muiTheme = useTheme();

    const selectedItem = useMemo(() => labelsData.find((item) => item.id === selected), [selected]);

    const handleChange = useEventCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
        const value = ev.target.value;

        if (!value) {
            setSelected('');
        } else {
            setSelected(parseInt(ev.target.value, 10));
        }
    });

    const renderValue = (): React.ReactNode => {
        if (!selectedItem) {
            return <span className="u-text-note">Select label</span>;
        }

        return <span className="u-text-truncate">{selectedItem?.name}</span>;
    };

    const selectProps: TextFieldProps['SelectProps'] & {
        MenuProps?: { PaperProps?: MuiCustomPaperSimplebarProps };
    } = {
        renderValue,
        displayEmpty: true,
        MenuProps: {
            ...muiTheme.components?.MuiSelect?.defaultProps?.MenuProps,
            PaperProps: {
                ...muiTheme.components?.MuiSelect?.defaultProps?.MenuProps?.PaperProps,
                maxWidth: '24rem'
            }
        }
    };

    const inputProps: TextFieldProps['InputProps'] = {
        startAdornment: selectedItem && (
            <InputAdornment position="start">
                <LabelRounded fontSize="large" sx={{ color: selectedItem.color }} />
            </InputAdornment>
        )
    };

    return (
        <div
            style={{
                maxWidth: '20rem'
            }}
        >
            <MuiCustomTextField
                variant="outlined"
                label="Filter by label"
                value={selected}
                select
                fullWidth
                InputLabelProps={{ shrink: true }}
                InputProps={inputProps}
                SelectProps={selectProps}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <ListItemText inset className="u-text-note">
                        None
                    </ListItemText>
                </MenuItem>
                {labelsData.map((item, index) => {
                    const shouldRenderGroup =
                        item.group &&
                        (index === 0 ||
                            (labelsData.length - 1 > index &&
                                item.group !== labelsData[index - 1].group));

                    const groupElement = shouldRenderGroup ? (
                        <ListSubheader disableSticky className="u-text-note">
                            {item.group}
                        </ListSubheader>
                    ) : null;

                    return [
                        groupElement,
                        <MenuItem key={item.id} value={item.id}>
                            <ListItemIcon>
                                <LabelRounded fontSize="large" sx={{ color: item.color }} />
                            </ListItemIcon>
                            <ListItemText className="u-text-truncate">{item.name}</ListItemText>
                        </MenuItem>
                    ];
                })}
            </MuiCustomTextField>
        </div>
    );
};
