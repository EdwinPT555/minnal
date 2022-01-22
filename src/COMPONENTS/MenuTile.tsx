import { Box, Paper } from '@mui/material';
import React from 'react';

type Props = {};

const MenuTile = (props: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Paper elevation={3} >
                Electric
            </Paper>
            <Paper elevation={3}>
                Plumbing
            </Paper>
            <Paper elevation={3}>
                Printing
            </Paper>
            <Paper elevation={3}>
                Painting
            </Paper>
            <Paper elevation={3} >
                Electric
            </Paper>
            <Paper elevation={3}>
                Plumbing
            </Paper>
            <Paper elevation={3}>
                Printing
            </Paper>
            <Paper elevation={3}>
                Painting
            </Paper>
        </Box>
    )
};

export default MenuTile;
