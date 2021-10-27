import React, { useEffect, useState } from 'react';
import Filter from '../Unit-Filter';
import SubSystemTable from './SubSystemTable'
import { Grid } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { useCases } from '../../providers/UseCaseProvider';
import { AllManufacturingUnitsCallbacks, ManufacturingUnit, SubSystem, SystemProperty } from 'core';

interface SubSystemOverviewProps<SubSystemType extends SubSystem> {
    shownSystemProperties: SystemProperty[];
    shownSubsystems: SubSystemType[];
    selectSubSystem(id: string): void;
}

function SubSystemOverview<SubSystemType extends SubSystem>({ shownSubsystems, shownSystemProperties, selectSubSystem }: SubSystemOverviewProps<SubSystemType>) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={11}>
                <Paper><Filter></Filter></Paper>
            </Grid>
            <Grid item xs={1}>
                <Paper><IconButton aria-label="add">
                    <AddToPhotosIcon />
                </IconButton></Paper>
            </Grid>
            <Grid item xs={11}>
                <Paper>
                    <SubSystemTable
                        subSystems={shownSubsystems}
                        shownSystemProperties={shownSystemProperties}
                        selectSubSystem={selectSubSystem}
                    />
                </Paper>
            </Grid>
        </Grid>

    );
};

export default SubSystemOverview;
