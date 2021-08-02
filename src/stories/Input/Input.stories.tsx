import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    TextField,
    Icon,
    IconButton,
    InputAdornment,
    Input,
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

export const CustomInput: Story = () => {
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
                    required
                    className="MuiCustomFormControl MuiCustomFormControl-labelAlignTop"
                    fullWidth
                >
                    <FormLabel htmlFor="email-input" className="MuiCustomFormLabel">
                        Email
                    </FormLabel>
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
                        className="MuiCustomInputBase"
                    />
                    <FormHelperText>example@gmail.com</FormHelperText>
                </FormControl>
                <FormControl
                    required
                    fullWidth
                    className="MuiCustomFormControl MuiCustomFormControl-labelAlignTop"
                >
                    <FormLabel htmlFor="password-input" className="MuiCustomFormLabel">
                        Password
                    </FormLabel>
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
                                    tabIndex={-1}
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
                        className="MuiCustomInputBase"
                    />
                </FormControl>
                <FormControl
                    color="secondary"
                    className="MuiCustomFormControl MuiCustomFormControl-labelAlignTop"
                    fullWidth
                >
                    <FormLabel htmlFor="placement-input" className="MuiCustomFormLabel">
                        Location
                    </FormLabel>
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
                        className="MuiCustomInputBase"
                    />
                    <FormHelperText>Example: 51.5091996,-0.1209507</FormHelperText>
                </FormControl>
                <FormControl
                    color="secondary"
                    fullWidth
                    className="MuiCustomFormControl MuiCustomFormControl-labelAlignTop"
                >
                    <FormLabel htmlFor="comment-input" className="MuiCustomFormLabel">
                        Comment
                    </FormLabel>
                    <InputBase
                        id="comment-input"
                        placeholder="Enter your comment"
                        multiline
                        minRows={4}
                        className="MuiCustomInputBase"
                    />
                </FormControl>
            </div>
        </>
    );
};

// Standard Inputs
export const StandardInputExample: Story = () => {
    return (
        <div className="stack stack--direction-column" style={{ maxWidth: '36rem' }}>
            <TextField
                id="standard-field-email"
                variant="standard"
                label="Email"
                required
                fullWidth
                helperText="example@mail.com"
            />
            <TextField
                id="standard-field-password"
                variant="standard"
                type="password"
                label="Password"
                required
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Icon>
                                <LockSvg />
                            </Icon>
                        </InputAdornment>
                    )
                }}
            />
        </div>
    );
};
StandardInputExample.storyName = 'Standard Input';

// Outlined Inputs
export const OutlinedInputExample: Story = () => {
    return <TextField id="outlined-field-email" variant="outlined" label="Email" required />;
};
OutlinedInputExample.storyName = 'Outlined Input';
