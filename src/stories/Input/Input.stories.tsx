import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Icon,
    IconButton,
    InputAdornment,
    InputBase,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import { InsertDriveFileOutlined } from '@material-ui/icons';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import {
    EyeOffSvg,
    InboxSvg,
    LockSvg,
    MapPinSvg,
    SaveSvg,
    UserSvg
} from '../../assets/svg-icons/feather';

export default {
    title: 'mui-custom/Input',
    component: InputBase
} as Meta;

export const InputBaseExample: Story = () => {
    return (
        <>
            <div
                className="stack stack--direction-column stack--gap-10"
                style={{ width: '100%', maxWidth: '40rem' }}
            >
                <Button
                    size="medium"
                    variant="contained"
                    startIcon={
                        <Icon fontSize="large" color="inherit">
                            <SaveSvg />
                        </Icon>
                    }
                >
                    Save changes
                </Button>
                <FormControl
                    variant="outlined"
                    required
                    className="MuiFormControl-labelAlignTop"
                    fullWidth
                >
                    <FormLabel htmlFor="email-input">Email</FormLabel>
                    <InputBase
                        id="email-input"
                        type="email"
                        placeholder="Enter your email"
                        startAdornment={
                            <InputAdornment position="start">
                                <Icon>
                                    <UserSvg />
                                </Icon>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText>example@gmail.com</FormHelperText>
                </FormControl>
                <FormControl required fullWidth className="MuiFormControl-labelAlignTop">
                    <FormLabel htmlFor="password-input">Password</FormLabel>
                    <InputBase
                        id="password-input"
                        type="password"
                        placeholder="Enter password"
                        startAdornment={
                            <InputAdornment position="start">
                                <Icon>
                                    <LockSvg />
                                </Icon>
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    className="MuiIconButton-dense MuiIconButton-circular"
                                    onMouseDown={(ev: React.MouseEvent) => {
                                        ev.preventDefault();
                                    }}
                                >
                                    <Icon>
                                        <EyeOffSvg />
                                    </Icon>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl color="secondary" className="MuiFormControl-labelAlignTop" fullWidth>
                    <FormLabel htmlFor="placement-input">Location</FormLabel>
                    <InputBase
                        id="placement-input"
                        type="text"
                        placeholder="Enter coordinates"
                        endAdornment={
                            <InputAdornment position="end">
                                <Icon fontSize="small">
                                    <MapPinSvg />
                                </Icon>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText>Example: 51.5091996,-0.1209507</FormHelperText>
                </FormControl>
                <FormControl color="secondary" fullWidth className="MuiFormControl-labelAlignTop">
                    <FormLabel htmlFor="comment-input">Comment</FormLabel>
                    <InputBase
                        id="comment-input"
                        placeholder="Enter your comment"
                        multiline
                        minRows={4}
                    />
                </FormControl>
            </div>
        </>
    );
};
InputBaseExample.storyName = 'Input Base';
