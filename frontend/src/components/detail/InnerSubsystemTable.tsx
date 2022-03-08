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
import { SubSystemOverviewModel } from "../../types/types";

interface InnerSubSystemTableProps<SubSystemOverviewModelType extends SubSystemOverviewModel> {
  subSystems: SubSystemOverviewModelType[];
  shownSystemPropertyIds: string[];
  selectSubSystem(id: string): void;
}

function InnerSubSystemTable<SubSystemOverviewModelType extends SubSystemOverviewModel>({
  subSystems,
  shownSystemPropertyIds,
  selectSubSystem,
}: InnerSubSystemTableProps<SubSystemOverviewModelType>) {
  const { t } = useTranslation();
  const [selectedSubsystem, setSelectedSubsystem] =
    useState<SubSystemOverviewModelType | null>(null);
  const [anchorRef, setAnchorRef] = useState<HTMLButtonElement | null>(null);

  const handleShowDetails = (selectedSubSystem: SubSystemOverviewModelType) => {
    selectSubSystem(selectedSubSystem.id);
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {shownSystemPropertyIds.map((systemPropertyId) => (
                <TableCell sx={tableHeaderCellStyle} key={systemPropertyId}>
                  {t("subsystems." + systemPropertyId)}
                </TableCell>
              ))}
              <TableCell sx={tableHeaderCellStyle} />
            </TableRow>
          </TableHead>
          <TableBody>
            {subSystems.map((subSystem) => (
              <TableRow key={subSystem.id}>
                {shownSystemPropertyIds.map((systemPropertyId) => (
                  <TableCell key={systemPropertyId}>
                    <Typography>
                      {subSystem.systemPropertyValues.get(systemPropertyId)}
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
      <SubSystemPopupMenu<SubSystemOverviewModelType>
        selectedSubSystem={selectedSubsystem}
        anchorEl={anchorRef}
        menuEntries={[
          {label: t("popUpMenu.duplicate"), onClick: (_: SubSystemOverviewModelType) => {}},
          {label: t("popUpMenu.delete"), onClick: (_: SubSystemOverviewModelType) => {}},
          {label: t("popUpMenu.view"), onClick: handleShowDetails},
        ]}
        setSelectedSubSystem={setSelectedSubsystem}
      />
    </>
  );
}

export default InnerSubSystemTable;
