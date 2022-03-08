import { TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Chip, Grid, Stack, styled } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { SystemProperty } from "core";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

interface FilterProps {
    shownSystemProperties: SystemProperty[];
}

interface TextFieldValues {
    value: String;
}

function Filter({ shownSystemProperties }: FilterProps) {
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

    const handleClick = (index: number) => {
        setSelectedFilteroptions([...selectedFilteroptions, shownSystemProperties[index]]);
        const value = "";
        const newData = textFieldValues.concat({value: value})
        // newData.push(value);
        // setTextFieldValues([...textFieldValues, {value: "s"}]);
        setTextFieldValues(newData);
    };

    const [selectedFilteroptions, setSelectedFilteroptions] = useState<SystemProperty[]>([]);

    const handleDelete = (chipToDelete: SystemProperty) => () => {
        setSelectedFilteroptions((chips) => chips.filter((chip) => chip.id !== chipToDelete.id));
    };

    const [textFieldValues, setTextFieldValues] = useState<TextFieldValues[]>([]);

    const handleValueChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const newData = {...textFieldValues};
        newData[index] = {value: value};
        console.log("Value: " + event.target.value + " Index: " + index)
        setTextFieldValues(newData);
    }

    return (
        <div>
            <Accordion className={classes.akkordeon}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><FilterAltIcon fontSize="large" />{t("filter.filter")}</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Stack
                                    direction="column"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    spacing={2}>
                                    <Grid
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            flexWrap: 'wrap',
                                            listStyle: 'none',
                                            p: 0.5,
                                            m: 0,
                                        }}
                                        component="ul">
                                        {selectedFilteroptions.map((data, index) => {
                                            let icon;

                                            if (data.id === 'React') {
                                                icon = <TagFacesIcon />;
                                            }
                                            return (
                                                <ListItem key={index}>
                                                    <Chip
                                                        icon={icon}
                                                        label={t("subsystems." + data.id)}
                                                        onDelete={data.id === 'React' ? undefined : handleDelete(data)}
                                                    />
                                                </ListItem>
                                            );
                                        })}
                                    </Grid>
                                    {selectedFilteroptions.map((data, index) => {
                                        return (
                                            <TextField fullWidth variant="outlined" label={t("subsystems." + data.id)} value={textFieldValues[index].value} onChange={handleValueChange(index)} key={index} />
                                        );
                                    })}
                                </Stack>
                            </Grid>
                            <Grid item xs={6} container spacing={2} direction="row">
                                <Grid
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        flexWrap: 'wrap',
                                        listStyle: 'none',
                                        p: 0.5,
                                        m: 0,
                                    }}
                                    component="ul"
                                >
                                    {shownSystemProperties.map((data, index) => {
                                        let icon;
                                        return (
                                            <ListItem key={index}>
                                                <Chip
                                                    icon={icon}
                                                    label={t("subsystems." + data.id)}
                                                    onClick={(e) => handleClick(index)}
                                                />
                                            </ListItem>
                                        );
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* <TableContainer component={Paper}>
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
                    </TableContainer> */}
                </AccordionDetails>
            </Accordion>
        </div >
    );
}

export default Filter;