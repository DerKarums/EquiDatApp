import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Typography } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { SubSystem, SystemProperty } from "core";
import React, { useRef, useState } from "react";

interface OverviewTableProps<SubSystemType extends SubSystem> {
  subSystems: SubSystemType[];
  shownSystemProperties: SystemProperty[];
  selectSubSystem(id: string): void;
}

function SubSystemTable<SubSystemType extends SubSystem>({
  subSystems,
  shownSystemProperties,
  selectSubSystem,
}: OverviewTableProps<SubSystemType>) {
  const [selectedSubsystem, setSelectedSubsystem] =
    useState<SubSystemType | null>(null);
    const [anchorRef, setAnchorRef] = useState<HTMLButtonElement | null>(null);

  const handleShowDetails = (event: Event | React.SyntheticEvent) => {
    handleClose(event);
    if (selectedSubsystem === null) {
      return;
    }
    selectSubSystem(selectedSubsystem.id);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef &&
      anchorRef.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setSelectedSubsystem(null);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setSelectedSubsystem(null);
    } else if (event.key === "Escape") {
      setSelectedSubsystem(null);
    }
  }

  function clickMenu(subsystem: SubSystemType, event: React.MouseEvent<HTMLElement>) {
    setAnchorRef(event.currentTarget as HTMLButtonElement);
    setSelectedSubsystem(subsystem);
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(selectedSubsystem !== null);
  React.useEffect(() => {
    if (prevOpen.current === true && selectedSubsystem === null) {
      anchorRef?.focus();
    }

    prevOpen.current = selectedSubsystem !== null;
  }, [selectedSubsystem]);

  const tableHeaderCellStyle = {
    fontWeight: "bold",
    backgroundColor: "#eeeeee",
    color: "#bdbdbd",
  };

  return (
    <>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {shownSystemProperties.map((systemProperty) => (
                  <TableCell sx={tableHeaderCellStyle} key={systemProperty.id}>{systemProperty.label}</TableCell>
                ))}
                <TableCell sx={tableHeaderCellStyle} />
              </TableRow>
            </TableHead>
            <TableBody>
              {subSystems.map((subSystem) => (
                <TableRow key={subSystem.id}>
                  {shownSystemProperties.map((systemProperty) => (
                    <TableCell key={systemProperty.id}>
                      <Typography>
                        {subSystem.getSystemPropertyValue(systemProperty.id)}
                      </Typography>
                    </TableCell>
                  ))}
                  <TableCell>
                    <IconButton
                      id="composition-button"
                      aria-controls={
                        selectedSubsystem ? "composition-menu" : undefined
                      }
                      aria-expanded={selectedSubsystem ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={(e: React.MouseEvent<HTMLElement>) => clickMenu(subSystem, e)}
                      >
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Popper
          open={selectedSubsystem !== null}
          anchorEl={anchorRef}
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
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={selectedSubsystem !== null}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Duplizieren</MenuItem>
                    <MenuItem onClick={handleClose}>Löschen</MenuItem>
                    <MenuItem onClick={handleShowDetails}>Ansicht</MenuItem>
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

export default SubSystemTable;
