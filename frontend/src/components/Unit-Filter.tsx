import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from "react-i18next";

function Filter() {
    const { t } = useTranslation();
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
                    <Typography><FilterAltIcon  fontSize="large" />{t("filter.filter")}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                    {t("filter.area")}
                                    </TableCell>
                                    <TableCell>
                                        <TextField id="standard-basic" label={t("filter.area")} variant="standard" />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{t("filter.country")}</TableCell>
                                    <TableCell><TextField id="standard-basic" label={t("filter.country")} variant="standard" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{t("filter.location")}</TableCell>
                                    <TableCell><TextField id="standard-basic" label={t("filter.location")} variant="standard" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{t("filter.manufacturer")}</TableCell>
                                    <TableCell><TextField id="standard-basic" label={t("filter.manufacturer")} variant="standard" /></TableCell>
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