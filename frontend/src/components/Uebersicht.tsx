import { Box, Button, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as faker from 'faker';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';
import { borderRadius, fontWeight } from '@mui/system';
import { Typography } from '@mui/material';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';


function Uebersicht() {

  var USERS: any[] = [], STATUS = ['Okay', 'Achtung', 'Alarm'];
const [open, setOpen] = useState(false);
const [selection, setSelection] = useState([]);
const toggle = (open: boolean) => setOpen(!open);

const useStyles = makeStyles((theme: Theme) => createStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: '10px 10px',
    maxWidth: 950
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: '#eeeeee',
    color: '#bdbdbd',
  }
}));

for (let i = 0; i < 14; i++) {
  USERS[i] = {
    name: faker.commerce.productName(),
    location: faker.commerce.department(),
    country: faker.address.country(),
    fertigungssteuerer: faker.lorem.word(),
    bereich: faker.lorem.word(),
    produkte: faker.lorem.words(),
    status: STATUS[Math.floor(Math.random() * STATUS.length)]
  }
}

  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Name der Fertigungseinheit</TableCell>
            <TableCell className={classes.tableHeaderCell}>Fertigungssteuerer</TableCell>
            <TableCell className={classes.tableHeaderCell}>Bereich</TableCell>
            <TableCell className={classes.tableHeaderCell}>Produkte</TableCell>
            <TableCell className={classes.tableHeaderCell}>Aktion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <Typography>{row.name}</Typography>
                <Typography>{row.location}</Typography>
                <Typography>{row.country}</Typography>
              </TableCell>
              <TableCell>{row.fertigungssteuerer}</TableCell>
              <TableCell>{row.produkte}</TableCell>
              <TableCell>{row.bereich}</TableCell>
              <TableCell><IconButton aria-label="menu" onClick={() => toggle(!open)}>
                <MoreVertIcon />
              </IconButton>
              {open && (
                <MenuList >
                  <MenuItem>
                    <ListItemIcon>
                      <MoreVertIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                    <Typography variant="body2" color="text.secondary"> ⌘X </Typography>
                  </MenuItem>
                </MenuList>
                )}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Uebersicht;

function showMenu(): void {
  <MenuList>
    <MenuItem>
      <ListItemIcon>
        <MoreVertIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>Cut</ListItemText>
      <Typography variant="body2" color="text.secondary"> ⌘X </Typography>
    </MenuItem>
  </MenuList>
}
