import React from 'react';

import { Button } from '@material-ui/core';

const TestButtonPage = () => {
    return (
        <div>
            <Button
                color="primary"
                variant="outlined"
                disableElevation
                disableRipple
                disableFocusRipple
                classes={{ root: 'button' }}
                focusVisibleClassName="button--focus-visible"
            >
                Test Button
            </Button>
        </div>
    );
};

export { TestButtonPage };
