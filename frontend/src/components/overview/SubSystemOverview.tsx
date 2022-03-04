import Filter from '../Unit-Filter';
import SubSystemTable from './SubSystemTable'
import { Grid } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { SystemProperty } from 'core';
import { SubSystemOverviewModel } from '../../types/types';


interface SubSystemOverviewProps<SubSystemOverviewModelType extends SubSystemOverviewModel> {
    shownSystemPropertyIds: string[];
    shownSubsystems: SubSystemOverviewModelType[];
    selectSubSystem(id: string): void;
    deleteSubSystem(id: string): void;
    duplicateSubSystem(id: string): void;
    createSubSystem(): void;
}


function SubSystemOverview<SubSystemOverviewModelType extends SubSystemOverviewModel>(
    { shownSubsystems, shownSystemPropertyIds, selectSubSystem, deleteSubSystem, duplicateSubSystem, createSubSystem }: SubSystemOverviewProps<SubSystemOverviewModelType>) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={11}>
                <Filter />
            </Grid>
            <Grid item xs={11}>
                <SubSystemTable
                    subSystems={shownSubsystems}
                    shownSystemPropertyIds={shownSystemPropertyIds}
                    selectSubSystem={selectSubSystem}
                    deleteSubSystem={deleteSubSystem}
                    duplicateSubSystem={duplicateSubSystem}
                />
            </Grid>
            <Grid item xs={1}>
                <IconButton aria-label="add" onClick={() => createSubSystem()}>
                    <AddToPhotosIcon fontSize="large" />
                </IconButton>
            </Grid>
        </Grid>

    );
};

export default SubSystemOverview;
