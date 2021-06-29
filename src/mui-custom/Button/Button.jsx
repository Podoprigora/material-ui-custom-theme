import React from 'react';

import { Button as MuiButton } from '@material-ui/core';

const Button = (props) => {
    return (
        <MuiButton
            disableRipple
            disableFocusRipple
            focusVisibleClassName="MuiButton-focusVisible"
            {...props}
        />
    );
};

export { Button };
