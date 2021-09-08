import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ButtonBase, Chip, Icon, Stack } from '@material-ui/core';
import { AwardSvg } from '../../assets/svg-icons/feather';

export default {
    title: 'mui-custom/Chip',
    component: Chip
} as Meta;

export const Examples: Story = () => {
    return (
        <Stack direction="column" spacing={8}>
            <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={4}>
                <Chip variant="filled" size="medium" label="React" />
                <Chip variant="filled" size="medium" label="Redux" />
                <Chip variant="filled" size="medium" label="Next.js" />
                <Chip variant="filled" size="medium" label="Material-UI" />
                <Chip variant="filled" size="medium" label="SCSS" />
                <Chip variant="filled" size="medium" label="Node.js" />
            </Stack>
            <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={4}>
                <Chip
                    variant="outlined"
                    size="medium"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="React"
                />
                <Chip
                    variant="outlined"
                    size="medium"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Redux"
                />
                <Chip
                    variant="outlined"
                    size="medium"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Next.js"
                />
                <Chip
                    variant="outlined"
                    size="medium"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Material-UI"
                />
                <Chip
                    variant="outlined"
                    size="medium"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="SCSS"
                />
                <Chip
                    variant="outlined"
                    size="medium"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Node.js"
                />
            </Stack>

            <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={4}>
                <Chip
                    variant="filled"
                    size="small"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="React"
                />
                <Chip
                    variant="filled"
                    size="small"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Redux"
                />
                <Chip
                    variant="filled"
                    size="small"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Next.js"
                />
                <Chip
                    variant="filled"
                    size="small"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Material-UI"
                />
                <Chip
                    variant="filled"
                    size="small"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="SCSS"
                />
                <Chip
                    variant="filled"
                    size="small"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Node.js"
                />
            </Stack>
            <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={4}>
                <Chip
                    variant="outlined"
                    size="small"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="React"
                />
                <Chip
                    variant="outlined"
                    size="small"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Redux"
                />
                <Chip
                    variant="outlined"
                    size="small"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Next.js"
                />
                <Chip
                    variant="outlined"
                    size="small"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Material-UI"
                />
                <Chip
                    variant="outlined"
                    size="small"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="SCSS"
                />
                <Chip
                    variant="outlined"
                    size="small"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Node.js"
                />
            </Stack>
            <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={4}>
                <Chip
                    variant="filled"
                    color="primary"
                    size="medium"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="React"
                    icon={
                        <Icon>
                            <AwardSvg />
                        </Icon>
                    }
                    onDelete={() => {}}
                />
                <Chip
                    variant="filled"
                    color="secondary"
                    size="medium"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Redux"
                    icon={
                        <Icon>
                            <AwardSvg />
                        </Icon>
                    }
                    onDelete={() => {}}
                />
                <Chip
                    variant="filled"
                    size="medium"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Next.js"
                    icon={
                        <Icon>
                            <AwardSvg />
                        </Icon>
                    }
                    onDelete={() => {}}
                />
                <Chip
                    variant="outlined"
                    color="primary"
                    size="medium"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Material-UI"
                    icon={
                        <Icon>
                            <AwardSvg />
                        </Icon>
                    }
                    onDelete={() => {}}
                />
                <Chip
                    variant="outlined"
                    color="secondary"
                    size="medium"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="SCSS"
                    icon={
                        <Icon>
                            <AwardSvg />
                        </Icon>
                    }
                    onDelete={() => {}}
                />
                <Chip
                    variant="outlined"
                    size="medium"
                    clickable
                    component={ButtonBase}
                    disableRipple
                    label="Node.js"
                    icon={
                        <Icon>
                            <AwardSvg />
                        </Icon>
                    }
                    onDelete={() => {}}
                />
            </Stack>
        </Stack>
    );
};
