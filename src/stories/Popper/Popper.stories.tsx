import React, { useCallback, useMemo, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, Paper } from '@material-ui/core';
import { Popper, PopperProps } from './Template';

export default {
    title: 'mui-custom/Popper',
    component: Popper
} as Meta;

export const Default: Story<PopperProps> = () => {
    const [anchorRef, setAnchorRef] = useState<HTMLButtonElement | null>(null);
    const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);

    const handleButtonClick = useCallback(() => {
        setOpen((prevState) => !prevState);
    }, []);

    const popperProps = useMemo<PopperProps>(
        () => ({
            open,
            anchorEl: anchorRef,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8]
                    }
                },
                {
                    name: 'arrow',
                    enabled: true,
                    options: {
                        element: arrowRef
                    }
                }
            ]
        }),
        [open, anchorRef, arrowRef]
    );

    return (
        <>
            <Button variant="contained" ref={setAnchorRef} onClick={handleButtonClick}>
                Toggle Popper
            </Button>
            <Popper {...popperProps}>
                <div ref={setArrowRef} data-popper-arrow />
                <Paper
                    style={{ width: '100%', maxWidth: '20rem' }}
                    elevation={4}
                    className="u-padding-8"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, aperiam sapiente
                    cumque delectus esse sunt possimus, labore commodi, repudiandae quam eaque iste
                    atque soluta? Voluptas quisquam harum quaerat facere quos!
                </Paper>
            </Popper>
        </>
    );
};
