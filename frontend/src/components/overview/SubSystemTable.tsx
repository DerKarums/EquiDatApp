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
import { SystemProperty } from "core";
import React, { useState } from "react";
import SubSystemPopupMenu from "../shared/abstract/SubSystemTable/SubSystemPopupMenu";
import { useTranslation } from "react-i18next";
import { SubSystemOverviewModel } from "../../types/types";

interface OverviewTableProps<SubSystemOverviewModelType extends SubSystemOverviewModel> {
  subSystems: SubSystemOverviewModelType[];
  shownSystemProperties: SystemProperty[];
  selectSubSystem(id: string): void;
  deleteSubSystem(id: string): void;
  duplicateSubSystem(id: string): void;
}

function SubSystemTable<SubSystemOverviewModelType extends SubSystemOverviewModel>({
  subSystems,
  shownSystemProperties,
  selectSubSystem,
  deleteSubSystem,
  duplicateSubSystem,
}: OverviewTableProps<SubSystemOverviewModelType>) {
  const { t } = useTranslation();
  const [selectedSubsystem, setSelectedSubsystem] =
    useState<SubSystemOverviewModelType | null>(null);
    const [anchorRef, setAnchorRef] = useState<HTMLButtonElement | null>(null);

  const handleShowDetails = (selectedSubSystem: SubSystemOverviewModelType) => {
    selectSubSystem(selectedSubSystem.id);
  };
  const handleDelete = (selectedSubSystem: SubSystemOverviewModelType) => {
    deleteSubSystem(selectedSubSystem.id);
  };
  const handleDuplicate = (selectedSubSystem: SubSystemOverviewModelType) => {
    duplicateSubSystem(selectedSubSystem.id);
  };

  function openMenu(subsystem: SubSystemOverviewModelType, event: React.MouseEvent<HTMLElement>) {
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
                  <TableCell sx={tableHeaderCellStyle} key={systemProperty.id}>{t("subsystems." + systemProperty.id)}</TableCell>
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
                        {subSystem.systemPropertyValues.get(systemProperty.id)}
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
      <SubSystemPopupMenu<SubSystemOverviewModelType>
        selectedSubSystem={selectedSubsystem}
        anchorEl={anchorRef}
        menuEntries={[
          {label: t("popUpMenu.duplicate"), onClick: (selectedSubSystem: SubSystemOverviewModelType) => handleDuplicate(selectedSubSystem)},
          {label: t("popUpMenu.delete"), onClick: (selectedSubSystem: SubSystemOverviewModelType) => handleDelete(selectedSubSystem)},
          {label: t("popUpMenu.view"), onClick: (selectedSubSystem: SubSystemOverviewModelType) => handleShowDetails(selectedSubSystem)},
        ]}
        setSelectedSubSystem={setSelectedSubsystem}
      />
    </>
  );
}

export default SubSystemTable;
