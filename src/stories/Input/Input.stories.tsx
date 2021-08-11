import React, { useState, useMemo } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

import {
    Icon,
    IconButton,
    InputAdornment,
    InputBase,
    InputBaseComponentProps,
    useEventCallback
} from '@material-ui/core';
import { MuiCustomTextField } from '@mui-custom';

import {
    CoffeeSvg,
    EyeOffSvg,
    EyeSvg,
    LockSvg,
    MapPinSvg,
    TagSvg,
    ThumbsDownSvg,
    UserSvg
} from '../../assets/svg-icons/feather';

export default {
    title: 'mui-custom/Input',
    component: InputBase
} as Meta;

const usePasswordField = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = useEventCallback(() => {
        setPasswordVisible((prevState) => !prevState);
    });

    return useMemo(() => ({ isPasswordVisible, togglePasswordVisibility } as const), [
        isPasswordVisible,
        togglePasswordVisibility
    ]);
};

export const OriginalInput: Story = () => {
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordField();

    return (
        <>
            <div
                className="stack stack--direction-column stack--justify-items-stretch stack--gap-10"
                style={{ width: '100%', maxWidth: '40rem' }}
            >
                <MuiCustomTextField
                    id="original-email-field"
                    variant="original"
                    label="Email"
                    placeholder="Enter your email"
                    helperText="example@gmail.com"
                    required
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>
                                    <UserSvg />
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                />
                <MuiCustomTextField
                    variant="original"
                    id="original-password-field"
                    type={isPasswordVisible ? 'text' : 'password'}
                    label="Password"
                    placeholder="Enter password"
                    required
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>
                                    <LockSvg />
                                </Icon>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    tabIndex={-1}
                                    className="MuiIconButton-dense MuiIconButton-circular"
                                    onMouseDown={(ev: React.MouseEvent) => {
                                        ev.preventDefault();
                                    }}
                                    onClick={togglePasswordVisibility}
                                >
                                    <Icon>{isPasswordVisible ? <EyeSvg /> : <EyeOffSvg />}</Icon>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <MuiCustomTextField
                    id="original-location-field"
                    label="Location"
                    color="secondary"
                    placeholder="Enter coordinates"
                    helperText="Example: 51.5091996,-0.1209507"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>
                                    <MapPinSvg />
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                />
                <MuiCustomTextField
                    variant="original"
                    id="original-comment-field"
                    label="Comment"
                    placeholder="Enter your comment"
                    multiline
                    minRows={4}
                    fullWidth
                />
                <MuiCustomTextField
                    id="original-first-name-field"
                    variant="original"
                    label="First Name"
                    labelAlign="left"
                    labelWidth="10rem"
                    required
                    fullWidth
                />
                <MuiCustomTextField
                    id="original-last-name-field"
                    variant="original"
                    label="Last Name"
                    labelAlign="left"
                    labelWidth="10rem"
                    required
                    fullWidth
                />
                <MuiCustomTextField
                    id="original-disabled-field"
                    variant="original"
                    label="Disabled"
                    defaultValue="Lorem iposm"
                    helperText="test note"
                    disabled
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>
                                    <CoffeeSvg />
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                />
                <MuiCustomTextField
                    id="original-error-field"
                    variant="original"
                    label="Invalid field"
                    defaultValue="Lorem iposm"
                    helperText="Some error message"
                    error
                    required
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>
                                    <ThumbsDownSvg />
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
        </>
    );
};

// Standard Inputs
export const StandardInputExample: Story = () => {
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordField();

    return (
        <>
            <div
                className="stack stack--direction-column stack--justify-items-stretch stack--gap-10"
                style={{ maxWidth: '40rem' }}
            >
                <MuiCustomTextField
                    id="standard-field-email"
                    variant="standard"
                    label="Email"
                    required
                    fullWidth
                    helperText="example@mail.com"
                />
                <MuiCustomTextField
                    id="standard-field-password"
                    variant="standard"
                    type={isPasswordVisible ? 'text' : 'password'}
                    label="Password"
                    required
                    fullWidth
                    helperText="At least 8 characters long."
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    tabIndex={-1}
                                    className="MuiIconButton-dense MuiIconButton-circular"
                                    onMouseDown={(ev: React.MouseEvent) => {
                                        ev.preventDefault();
                                    }}
                                    onClick={togglePasswordVisibility}
                                >
                                    <Icon>{isPasswordVisible ? <EyeSvg /> : <EyeOffSvg />}</Icon>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <MuiCustomTextField
                    variant="standard"
                    color="secondary"
                    label="Long label text overflow. Molestias totam explicabo consequatur praesentium ratione nihil alias quam voluptas!"
                    required
                    fullWidth
                />
                <MuiCustomTextField
                    id="standard-field-no-label"
                    variant="standard"
                    fullWidth
                    placeholder="No label"
                    helperText="*** *** ****"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>
                                    <TagSvg />
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                />
                <MuiCustomTextField
                    variant="standard"
                    color="secondary"
                    label="Comment"
                    placeholder="Leave your comment"
                    multiline
                    minRows={4}
                    fullWidth
                />
                <MuiCustomTextField
                    id="standard-disabled-field"
                    variant="standard"
                    label="Disabled"
                    defaultValue="Lorem iposm"
                    disabled
                    required
                    fullWidth
                    helperText="test note"
                />
                <MuiCustomTextField
                    id="standard-error-field"
                    variant="standard"
                    label="Invalid field"
                    defaultValue="Lorem iposm"
                    error
                    required
                    fullWidth
                    helperText="Some error message"
                />
            </div>
        </>
    );
};
StandardInputExample.storyName = 'Standard Input';

// Standard filled inputs

export const StandardFilledInputExample: Story = () => {
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordField();

    return (
        <>
            <div
                className="stack stack--direction-column stack--justify-items-stretch stack--gap-10"
                style={{ maxWidth: '40rem' }}
            >
                <MuiCustomTextField
                    id="standard-filled-field-email"
                    variant="filled"
                    label="Email"
                    required
                    fullWidth
                    helperText="example@mail.com"
                />
                <MuiCustomTextField
                    id="standard-filled-field-password"
                    variant="filled"
                    type={isPasswordVisible ? 'text' : 'password'}
                    label="Password"
                    required
                    fullWidth
                    helperText="At least 8 characters long."
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    tabIndex={-1}
                                    className="MuiIconButton-dense MuiIconButton-circular"
                                    onMouseDown={(ev: React.MouseEvent) => {
                                        ev.preventDefault();
                                    }}
                                    onClick={togglePasswordVisibility}
                                >
                                    <Icon>{isPasswordVisible ? <EyeSvg /> : <EyeOffSvg />}</Icon>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <MuiCustomTextField
                    variant="filled"
                    color="secondary"
                    label="Long label text overflow. Molestias totam explicabo consequatur praesentium ratione nihil alias quam voluptas!"
                    required
                    fullWidth
                />
                <MuiCustomTextField
                    variant="filled"
                    fullWidth
                    placeholder="No label"
                    helperText="*** *** ****"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>
                                    <TagSvg />
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                />
                <MuiCustomTextField
                    variant="filled"
                    color="secondary"
                    label="Comment"
                    placeholder="Leave your comment"
                    multiline
                    minRows={4}
                    fullWidth
                />
                <MuiCustomTextField
                    id="filled-disabled-field"
                    variant="filled"
                    label="Disabled"
                    defaultValue="Lorem iposm"
                    disabled
                    required
                    fullWidth
                    helperText="test note"
                />
                <MuiCustomTextField
                    id="filled-error-field"
                    variant="filled"
                    label="Invalid field"
                    defaultValue="Lorem iposm"
                    error
                    required
                    fullWidth
                    helperText="Some error message"
                />
            </div>
        </>
    );
};
StandardFilledInputExample.storyName = 'Standard filled input';

// Outlined Inputs

export const OutlinedInputExample: Story = () => {
    const { isPasswordVisible, togglePasswordVisibility } = usePasswordField();

    return (
        <>
            <div
                className="stack stack--direction-column stack--justify-items-stretch stack--gap-12"
                style={{ maxWidth: '40rem' }}
            >
                <MuiCustomTextField
                    variant="outlined"
                    label="Email"
                    required
                    fullWidth
                    // InputLabelProps={{ shrink: true }}
                    // InputProps={{ notched: true }}
                    helperText="example@mail.com"
                />
                <MuiCustomTextField
                    variant="outlined"
                    type={isPasswordVisible ? 'text' : 'password'}
                    label="Password"
                    required
                    fullWidth
                    helperText="At least 8 characters long."
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    tabIndex={-1}
                                    className="MuiIconButton-dense MuiIconButton-circular"
                                    onMouseDown={(ev: React.MouseEvent) => {
                                        ev.preventDefault();
                                    }}
                                    onClick={togglePasswordVisibility}
                                >
                                    <Icon>{isPasswordVisible ? <EyeSvg /> : <EyeOffSvg />}</Icon>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <MuiCustomTextField
                    variant="outlined"
                    color="secondary"
                    label="Long label text overflow. Molestias totam explicabo consequatur praesentium ratione nihil alias quam voluptas!"
                    required
                    fullWidth
                />
                <MuiCustomTextField
                    variant="outlined"
                    fullWidth
                    placeholder="No label"
                    helperText="*** *** ****"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>
                                    <TagSvg />
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                />
                <MuiCustomTextField
                    variant="outlined"
                    color="secondary"
                    label="Comment"
                    placeholder="Leave your comment"
                    multiline
                    minRows={4}
                    fullWidth
                />
                <MuiCustomTextField
                    id="outlined-disabled-field"
                    variant="outlined"
                    label="Disabled"
                    defaultValue="Lorem iposm"
                    disabled
                    required
                    fullWidth
                    helperText="test note"
                />
                <MuiCustomTextField
                    id="outlined-error-field"
                    variant="outlined"
                    label="Invalid field"
                    defaultValue="Lorem iposm"
                    error
                    required
                    fullWidth
                    helperText="Some error message"
                />
            </div>
        </>
    );
};
OutlinedInputExample.storyName = 'Outlined Input';

// Number Format

const PriceGBRNumberFormatInput = React.forwardRef<HTMLInputElement, InputBaseComponentProps>(
    function PriceGBRNumberFormatInput(props, forwardedRef) {
        const numberFormatProps = props as NumberFormatProps;

        return (
            <NumberFormat
                {...numberFormatProps}
                getInputRef={forwardedRef}
                thousandSeparator=","
                decimalSeparator="."
                prefix="£"
                isNumericString
            />
        );
    }
);

const PriceUSDNumberFormatInput = React.forwardRef<HTMLInputElement, InputBaseComponentProps>(
    function PriceUSDNumberFormatInput(props, forwardedRef) {
        const numberFormatProps = props as NumberFormatProps;

        return (
            <NumberFormat
                {...numberFormatProps}
                getInputRef={forwardedRef}
                thousandSeparator=","
                decimalSeparator="."
                prefix="$"
                isNumericString
            />
        );
    }
);

const CreditCardNumberFormatInput = React.forwardRef<HTMLInputElement, InputBaseComponentProps>(
    function CreditCardNumberFormatInput(props, forwardedRef) {
        const numberFormatProps = props as NumberFormatProps;

        return (
            <NumberFormat
                {...numberFormatProps}
                getInputRef={forwardedRef}
                format="#### #### #### ####"
                mask="_"
                allowEmptyFormatting={false}
            />
        );
    }
);

const CreditCardExpiryNumberFormatInput = React.forwardRef<
    HTMLInputElement,
    InputBaseComponentProps
>(function CreditCardExpiryNumberFormatInput(props, forwardedRef) {
    const numberFormatProps = props as NumberFormatProps;

    return (
        <NumberFormat
            {...numberFormatProps}
            getInputRef={forwardedRef}
            format="##/##"
            placeholder="MM/YY"
            mask={['M', 'M', 'Y', 'Y']}
        />
    );
});

const CreditCardCvcNumberFormatInput = React.forwardRef<HTMLInputElement, InputBaseComponentProps>(
    function CreditCardCvcNumberFormatInput(props, forwardedRef) {
        const numberFormatProps = props as NumberFormatProps;

        return <NumberFormat {...numberFormatProps} getInputRef={forwardedRef} format="###" />;
    }
);

const PhoneNumberFormatInput = React.forwardRef<HTMLInputElement, InputBaseComponentProps>(
    function PhoneNumberFormatInput(props, forwardedRef) {
        const numberFormatProps = props as NumberFormatProps;

        return (
            <NumberFormat
                {...numberFormatProps}
                getInputRef={forwardedRef}
                format="+1 (###) ###-####"
                placeholder="+1 (___) ___-____"
                mask="_"
                allowEmptyFormatting={false}
            />
        );
    }
);

export const NumberFormatExamples: Story = () => {
    return (
        <div
            className="stack stack--direction-column stack--justify-items-stretch stack--gap-10"
            style={{ maxWidth: '40rem' }}
        >
            <MuiCustomTextField
                variant="outlined"
                id="number-format-price-usd-field"
                label="Price USD"
                fullWidth
                InputProps={{
                    inputComponent: PriceUSDNumberFormatInput
                }}
            />
            <MuiCustomTextField
                variant="outlined"
                id="number-format-price-gbr-field"
                label="Price GBR"
                fullWidth
                InputProps={{
                    inputComponent: PriceGBRNumberFormatInput
                }}
            />
            <div className="stack stack--justify-items-stretch stack--gap-6">
                <MuiCustomTextField
                    variant="outlined"
                    id="number-format-card-number-field"
                    label="Credit card number"
                    fullWidth
                    InputProps={{
                        inputComponent: CreditCardNumberFormatInput
                    }}
                />
                <MuiCustomTextField
                    variant="outlined"
                    id="number-format-card-expiry-field"
                    label="Expires"
                    fullWidth
                    style={{ maxWidth: '10rem' }}
                    InputProps={{
                        inputComponent: CreditCardExpiryNumberFormatInput
                    }}
                />
                <MuiCustomTextField
                    variant="outlined"
                    id="number-format-card-cvc-field"
                    label="CVC"
                    fullWidth
                    style={{ maxWidth: '8rem' }}
                    InputProps={{
                        inputComponent: CreditCardCvcNumberFormatInput
                    }}
                />
            </div>
            <MuiCustomTextField
                variant="outlined"
                id="number-format-phone-field"
                label="Phone"
                fullWidth
                InputProps={{
                    inputComponent: PhoneNumberFormatInput
                }}
            />
        </div>
    );
};
NumberFormatExamples.storyName = 'Number Format';
