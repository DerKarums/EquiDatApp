import { Box, Button, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import TextField from '@mui/material/TextField';

function Filter() {


    const useStyles = makeStyles((theme: Theme) => createStyles({
        table: {
            minWidth: 650,
            backgroundColor: '#2196f3'
        },
        tableContainer: {
            borderRadius: 15,
            margin: '10px 10px',
            maxWidth: 950,
            backgroundColor: '#2196f3'
        },
        akkordeon: {
            borderRadius: 15,
            margin: '10px 10px',
            backgroundColor: '#2196f3'
        },
    }));
    const classes = useStyles();
    return (
        <div>
            <Accordion className={classes.akkordeon}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><FilterAltIcon />Filter</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        Bereich
                                    </TableCell>
                                    <TableCell>
                                        <TextField id="standard-basic" label="Bereich" variant="standard" />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Land</TableCell>
                                    <TableCell><TextField id="standard-basic" label="Land" variant="standard" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Standort</TableCell>
                                    <TableCell><TextField id="standard-basic" label="Standort" variant="standard" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Hersteller</TableCell>
                                    <TableCell><TextField id="standard-basic" label="Hersteller" variant="standard" /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Filter;