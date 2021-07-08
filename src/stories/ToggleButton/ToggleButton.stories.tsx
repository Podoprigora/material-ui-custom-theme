import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon, IconProps } from '@material-ui/core';
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

type DefaultStoryProps = ToggleButtonGroupProps & { iconFontSize?: IconProps['fontSize'] };

export const Default: Story<DefaultStoryProps> = (args) => {
    const { iconFontSize, ...other } = args;
    const [selected, setSelected] = useState<string>('grid');

    const handleChange = (ev: React.MouseEvent, newValue: string) => {
        setSelected(newValue);
    };

    return (
        <ToggleButtonGroup {...other} value={selected} onChange={handleChange}>
            <ToggleButton value="grid">
                <Icon fontSize={iconFontSize}>
                    <GridSvg />
                </Icon>
            </ToggleButton>
            <ToggleButton value="list">
                <Icon fontSize={iconFontSize}>
                    <ListSvg />
                </Icon>
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

Default.args = {
    size: 'medium',
    exclusive: true,
    color: 'secondary',
    iconFontSize: 'large'
} as DefaultStoryProps;

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
