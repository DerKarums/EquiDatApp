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
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';

function Uebersicht() {

  var USERS: any[] = [], STATUS = ['Okay', 'Achtung', 'Alarm'];

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
    } setOpen(false);
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
    <>
      <div>
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
                  <TableCell><IconButton 
                  ref={anchorRef}
                    id="composition-button"
                      aria-controls={open ? 'composition-menu' : undefined}
                       aria-expanded={open ? 'true' : undefined}
                       aria-haspopup="true"
                       onClick={handleToggle}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer >
      </div>
      <div>

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
                    <MenuItem onClick={handleClose}>Kopieren</MenuItem>
                    <MenuItem onClick={handleClose}>Löschen</MenuItem>
                    <MenuItem onClick={handleClose}>Ansicht</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </>
  );
}

export default Uebersicht;

