import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { SubSystem, SystemProperty } from "core";
import React, { useState } from "react";
import SubSystemPopupMenu from "../shared/abstract/SubSystemTable/SubSystemPopupMenu";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [selectedSubsystem, setSelectedSubsystem] =
    useState<SubSystemType | null>(null);
    const [anchorRef, setAnchorRef] = useState<HTMLButtonElement | null>(null);

  const handleShowDetails = () => {
    if (selectedSubsystem === null) {
      return;
    }
    selectSubSystem(selectedSubsystem.id);
  };

  function openMenu(subsystem: SubSystemType, event: React.MouseEvent<HTMLElement>) {
    setAnchorRef(event.currentTarget as HTMLButtonElement);
    setSelectedSubsystem(subsystem);
  }

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
                      onClick={(e: React.MouseEvent<HTMLElement>) => openMenu(subSystem, e)}
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
      <SubSystemPopupMenu<SubSystemType>
        selectedSubSystem={selectedSubsystem}
        anchorEl={anchorRef}
        menuEntries={[
          {label: t("popUpMenu.dublicate"), onClick: (_: SubSystemType) => {}},
          {label: t("popUpMenu.delete"), onClick: (_: SubSystemType) => {}},
          {label: t("popUpMenu.view"), onClick: (selectedSubSystem: SubSystemType) => handleShowDetails()},
        ]}
        setSelectedSubSystem={setSelectedSubsystem}
      />
    </>
  );
}

export default SubSystemTable;
