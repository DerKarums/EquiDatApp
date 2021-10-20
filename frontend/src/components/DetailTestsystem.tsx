import { Box, Breadcrumbs, Checkbox, FormControlLabel, Grid, Link, ListItemIcon, ListItemText, makeStyles, MenuList, Switch, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableSortLabel } from '@material-ui/core';
import { Button, IconButton, Paper, Stack, Menu, MenuItem, Table, TableRow, Popper, Grow, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { visuallyHidden } from '@mui/utils';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { AddBox } from '@material-ui/icons';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
    table: {
        minWidth: 400,
    },
})

function DetailTestsystem() {
    const classes = useStyles();

    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('calories');
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selection, setSelection] = React.useState([]);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClickFirst = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    // const handleClickSecond = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;








    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);









    return (
        <div className="Detail">
            <header className="Detail-header">
                <Stack spacing={2}>
                    <Grid container spacing={1}>
                        <Grid item xs={11}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link underline="hover" color="inherit">
                                    Name_des_Fertigungssystems
                                </Link>
                                <Link underline="hover" color="inherit">
                                    Name_des_Testsystems
                                </Link>
                                {/* <Link
                                    underline="hover"
                                    color="inherit"
                                    href="/getting-started/installation/"
                                >
                                    Testsystem
                                </Link>
                                <Typography color="text.primary">Komponente</Typography> */}
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={11}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Bezeichnung</TableCell>
                                            <TableCell align="left">Wert</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="left">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={1}>
                            <Stack spacing={2}
                                justifyContent="center"
                                alignItems="left"><IconButton color="primary">

                                    <SaveIcon sx={{ fontSize: 60 }} />
                                </IconButton><IconButton color="primary">
                                    <EditIcon sx={{ fontSize: 60 }} />
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={1}>
                        </Grid><Grid item xs={10}>
                            <Stack spacing={2}>
                                <Typography variant="h4" gutterBottom component="div" align="center">
                                    Komponenten
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={11}>
                            <Box sx={{ width: '100%' }}>
                                <Paper sx={{ width: '100%', mb: 2 }}>
                                    <TableContainer>
                                        <Table
                                            sx={{ minWidth: 750 }}
                                            aria-labelledby="tableTitle"
                                            size={dense ? 'small' : 'medium'}
                                        >
                                            <EnhancedTableHead
                                                numSelected={selected.length}
                                                order={order}
                                                orderBy={orderBy}
                                                onSelectAllClick={handleSelectAllClick}
                                                onRequestSort={handleRequestSort}
                                                rowCount={rows.length}
                                            />
                                            <TableBody>
                                                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                                                {stableSort(rows, getComparator(order, orderBy))
                                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    .map((row, index) => {
                                                        const isItemSelected = isSelected(row.name);
                                                        const labelId = `enhanced-table-checkbox-${index}`;

                                                        return (
                                                            <TableRow
                                                                hover
                                                                // onClick={(event) => handleClickFirst(event, row.name)}
                                                                role="checkbox"
                                                                aria-checked={isItemSelected}
                                                                tabIndex={-1}
                                                                key={row.name}
                                                                selected={isItemSelected}
                                                            >
                                                                {/* <TableCell padding="checkbox">
                                                                    <Checkbox
                                                                        color="primary"
                                                                        checked={isItemSelected}
                                                                        inputProps={{
                                                                            'aria-labelledby': labelId,
                                                                        }}
                                                                    />
                                                                </TableCell> */}
                                                                <TableCell
                                                                    component="th"
                                                                    id={labelId}
                                                                    scope="row"
                                                                    padding="none"
                                                                >
                                                                    {row.name}
                                                                </TableCell>
                                                                <TableCell align="right">{row.calories}</TableCell>
                                                                <TableCell align="right">{row.fat}</TableCell>
                                                                <TableCell align="right">{row.carbs}</TableCell>
                                                                <TableCell align="right"><div><IconButton
                                                                    ref={anchorRef}
                                                                    id="composition-button"
                                                                    aria-controls={open ? 'composition-menu' : undefined}
                                                                    aria-expanded={open ? 'true' : undefined}
                                                                    aria-haspopup="true"
                                                                    onClick={handleToggle}
                                                                >
                                                                    <MoreVertIcon></MoreVertIcon>
                                                                </IconButton>
                                                                    <Popper
                                                                        open={open}
                                                                        anchorEl={anchorRef.current}
                                                                        role={undefined}
                                                                        placement="bottom-start"
                                                                        transition
                                                                        disablePortal
                                                                    >
                                                                        {({ TransitionProps, placement }) => (
                                                                            <Grow
                                                                                {...TransitionProps}
                                                                                style={{
                                                                                    transformOrigin:
                                                                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                                                                }}
                                                                            >
                                                                                <Paper>
                                                                                    <ClickAwayListener onClickAway={handleClose}>
                                                                                        <MenuList
                                                                                            autoFocusItem={open}
                                                                                            id="composition-menu"
                                                                                            aria-labelledby="composition-button"
                                                                                            onKeyDown={handleListKeyDown}
                                                                                        >
                                                                                            <MenuItem onClick={handleClose}>Dublizieren</MenuItem>
                                                                                            <MenuItem onClick={handleClose}>Neu zuweisen</MenuItem>
                                                                                            <MenuItem onClick={handleClose}>Löschen</MenuItem>
                                                                                        </MenuList>
                                                                                    </ClickAwayListener>
                                                                                </Paper>
                                                                            </Grow>
                                                                        )}
                                                                    </Popper>
                                                                    {/* <IconButton
                                                                        id="basic-button"
                                                                        aria-controls="basic-menu"
                                                                        aria-haspopup="true"
                                                                        aria-expanded={open ? 'true' : undefined}
                                                                        onClick={handleClickSecond}
                                                                    >
                                                                        <MoreVertIcon></MoreVertIcon>
                                                                    </IconButton>
                                                                    <Menu
                                                                        id="basic-menu"
                                                                        anchorEl={anchorEl}
                                                                        open={open}
                                                                        onClose={handleClose}
                                                                        MenuListProps={{
                                                                            'aria-labelledby': 'basic-button',
                                                                        }}
                                                                    >
                                                                        <MenuItem onClick={handleClose}>Dublizieren</MenuItem>
                                                                        <MenuItem onClick={handleClose}>Neu zuweisen</MenuItem>
                                                                        <MenuItem onClick={handleClose}>Löschen</MenuItem>
                                                                    </Menu> */}
                                                                </div>
                                                                </TableCell>
                                                            </TableRow>
                                                        );
                                                    })}
                                                {emptyRows > 0 && (
                                                    <TableRow
                                                        style={{
                                                            height: (dense ? 33 : 53) * emptyRows,
                                                        }}
                                                    >
                                                        <TableCell colSpan={6} />
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25]}
                                        component="div"
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </Paper>
                            </Box>

                        </Grid><Grid item xs={1}>
                        </Grid>
                    </Grid>

                </Stack>
            </header>
        </div >
    );
}

interface Data {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
): Data {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
    };
}

const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
        a: { [key in Key]: number | string },
        b: { [key in Key]: number | string },
    ) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell align="right">
                    <IconButton color="primary">
                        <AddBoxIcon sx={{ fontSize: 60 }} />
                    </IconButton>
                </TableCell>
            </TableRow>
        </TableHead>
    );
}



export default DetailTestsystem;