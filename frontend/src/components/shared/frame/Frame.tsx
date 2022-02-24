import { Box, Grid } from '@mui/material';
import * as React from 'react';
import NavigationTabs from './NavigationTabs';
import HeaderBar from './HeaderBar';

interface FrameProps {
    children?: React.ReactNode;
}

const Frame = ({ children }: FrameProps) => {
    return (
        <>
            <HeaderBar />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <NavigationTabs />
                        </Box>

                        {children}

                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Frame;