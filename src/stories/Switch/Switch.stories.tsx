import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Switch, SwitchProps } from '@material-ui/core';

export default {
    title: 'mui-custom/Switch',
    component: Switch
} as Meta;

export const Default: Story<SwitchProps> = (args) => {
    return <Switch {...args} />;
};

Default.args = {} as SwitchProps;

export const Examples = () => {
    return (
        <div className="stack stack--direction-column stack--justifyStretch stack--gap-8">
            <div className="stack stack--gap-8">
                <div className="stack stack--direction-column stack--gap-4">
                    <Default color="default" defaultChecked />
                    <Default color="primary" defaultChecked />
                    <Default color="secondary" defaultChecked />
                </div>
                <div className="stack stack--direction-column stack--gap-4">
                    <Default color="default" defaultChecked disabled />
                    <Default color="primary" defaultChecked disabled />
                    <Default color="secondary" defaultChecked disabled />
                </div>
            </div>
            <div className="stack stack--direction-column stack--gap-4">
                <Default color="default" size="small" defaultChecked />
                <Default color="primary" size="small" defaultChecked />
                <Default color="secondary" size="small" defaultChecked />
            </div>
        </div>
    );
};
