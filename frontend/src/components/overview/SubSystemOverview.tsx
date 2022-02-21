import Filter from '../Unit-Filter';
import SubSystemTable from './SubSystemTable'
import { Grid } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { SubSystem, SystemProperty } from 'core';

interface SubSystemOverviewProps<SubSystemType extends SubSystem> {
    shownSystemProperties: SystemProperty[];
    shownSubsystems: SubSystemType[];
    selectSubSystem(id: string): void;
    deleteSubSystem(id: string): void;
    typeOfSubSystem: String
}

function SubSystemOverview<SubSystemType extends SubSystem>({ shownSubsystems, shownSystemProperties, selectSubSystem, deleteSubSystem, typeOfSubSystem }: SubSystemOverviewProps<SubSystemType>) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={11}>
                <Filter />
            </Grid>
            <Grid item xs={11}>
                <SubSystemTable
                    subSystems={shownSubsystems}
                    shownSystemProperties={shownSystemProperties}
                    selectSubSystem={selectSubSystem}
                    deleteSubSystem={deleteSubSystem}
                    typeOfSubSystem={typeOfSubSystem}
                />
            </Grid>
            <Grid item xs={1}>
                <IconButton aria-label="add">
                    <AddToPhotosIcon fontSize="large"/>
                </IconButton>
            </Grid>
        </Grid>

    );
};

export default SubSystemOverview;
