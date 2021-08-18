import React, { useMemo, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

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
    ListSubheader
} from '@material-ui/core';
import { FiberManualRecordRounded, LabelRounded } from '@material-ui/icons';

import { MuiCustomTextField } from '@mui-custom';
import { TagSvg } from '../../assets/svg-icons/feather';

export default {
    title: 'mui-custom/Select',
    component: Select
} as Meta;

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

export const Default: Story = () => {
    const [selected, setSelected] = useState<number | string>('');
    const muiTheme = useTheme();

    const selectedItem = useMemo(() => labelsData.find((item) => item.id === selected), [selected]);

    const handleChange = useEventCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(ev.target.value, 10);
        setSelected(value);
    });

    const renderValue = (): React.ReactNode => {
        if (!selectedItem) {
            return <span className="u-text-note">Select label</span>;
        }

        return <span className="u-text-truncate">{selectedItem?.name}</span>;
    };

    const selectProps: TextFieldProps['SelectProps'] = {
        renderValue,
        displayEmpty: true,
        placeholder: 'Select label',
        MenuProps: {
            ...muiTheme.components?.MuiSelect?.defaultProps?.MenuProps,
            PaperProps: {
                sx: { width: '100%', maxWidth: '24rem', marginTop: '.2rem' }
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
        <div className="stack stack--direction-column stack--gap-10" style={{ maxWidth: '20rem' }}>
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
                <MenuItem value={-1}>
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
                        <ListSubheader className="u-text-note">{item.group}</ListSubheader>
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
