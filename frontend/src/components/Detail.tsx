import { ClassNames } from '@emotion/react';
import { Box, Breadcrumbs, Button, Grid, Link, makeStyles, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tabs, TextField } from '@material-ui/core';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { DataGrid, GridSortModel } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

function Detail() {
    const classes = useStyles();

    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 10,
        maxColumns: 6,
    });
    
    const [sortModel, setSortModel] = React.useState<GridSortModel>([
        {
            field: 'commodity',
            sort: 'asc',
        },
    ]);
    return (
        <div className="Detail">
            <header className="Detail-header">
                <Stack spacing={2}>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={8}>
                            <Item><Breadcrumbs aria-label="breadcrumb">
                                <Link underline="hover" color="inherit" href="/">
                                    MUI
                                </Link>
                                <Link
                                    underline="hover"
                                    color="inherit"
                                    href="/getting-started/installation/"
                                >
                                    Core
                                </Link>
                                <Typography color="text.primary">Breadcrumbs</Typography>
                            </Breadcrumbs></Item>
                        </Grid>
                        <Grid item xs={1}>
                            <Item>xs=1</Item>
                        </Grid>
                        <Grid item xs={1}>
                            <Item>xs=1</Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={8}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell align="left">Calories</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="left">{row.calories}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                        </Grid><Grid item xs={8}>
                            <Item>Testsystem</Item>
                        </Grid><Grid item xs={2}>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                        </Grid><Grid item xs={8}>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    {...data}
                                    sortModel={sortModel}
                                    onSortModelChange={(model) => setSortModel(model)}
                                />
                            </div>
                        </Grid><Grid item xs={2}>
                        </Grid>
                    </Grid>
                </Stack>
            </header>
        </div>
    );
}

function createData(
    name: string,
    calories: number,
) {
    return { name, calories };
}

const rows = [
    createData('Frozen yoghurt', 159),
    createData('Ice cream sandwich', 237),
    createData('Eclair', 262),
    createData('Cupcake', 305),
    createData('Gingerbread', 356),
    createData('Frozen yoghurt', 159),
    createData('Ice cream sandwich', 237),
    createData('Eclair', 262),
];


export default Detail;