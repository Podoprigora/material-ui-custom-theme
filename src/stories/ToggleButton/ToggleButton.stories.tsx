import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon } from '@material-ui/core';
import { GridSvg, ListSvg } from '../../assets/svg-icons/feather';
import {
    ToggleButton,
    ToggleButtonProps,
    ToggleButtonGroup,
    ToggleButtonGroupProps
} from './Templete';

export default {
    title: 'mui-custom/ToggleButton',
    component: ToggleButtonGroup,
    subcomponents: { ToggleButton }
} as Meta;

export const Default: Story<ToggleButtonGroupProps> = (args) => {
    const [selected, setSelected] = useState<string>('grid');

    const handleChange = (ev: React.MouseEvent, newValue: string) => {
        setSelected(newValue);
    };

    return (
        <ToggleButtonGroup {...args} value={selected} onChange={handleChange}>
            <ToggleButton value="grid">
                <Icon>
                    <GridSvg />
                </Icon>
            </ToggleButton>
            <ToggleButton value="list">
                <Icon>
                    <ListSvg />
                </Icon>
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

Default.args = {
    size: 'small',
    exclusive: true
} as ToggleButtonGroupProps;

const FiltersExample = () => {
    const [selected, setSelected] = useState<string>('');

    const handleChange = (ev: React.MouseEvent, newValue: string) => {
        setSelected(newValue);
    };

    return (
        <ToggleButtonGroup exclusive color="secondary" value={selected} onChange={handleChange}>
            <ToggleButton value="new">New</ToggleButton>
            <ToggleButton value="pending">Pending</ToggleButton>
            <ToggleButton value="completed">Completed</ToggleButton>
        </ToggleButtonGroup>
    );
};

export const Exmaples = () => {
    return (
        <>
            <div className="actions-bar u-margin-b-6">
                <Default size="large" color="primary" exclusive />
            </div>
            <div className="actions-bar u-margin-b-6">
                <Default size="medium" color="secondary" exclusive />
            </div>
            <div className="actions-bar u-margin-b-6">
                <Default size="small" color="standard" exclusive />
            </div>
            <div className="actions-bar">
                <FiltersExample />
            </div>
        </>
    );
};
