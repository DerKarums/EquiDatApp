import { Cancel, Edit, Save } from "@mui/icons-material";
import {
  Table,
  TableRow,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  Paper,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import { SystemProperty } from "core";
import { useState } from "react";
import SystemPropertyDisplayRow from "./SystemPropertyDisplayRow";
import { useTranslation } from "react-i18next";
import { SystemPropertyRow } from "../../types/types" 

interface SystemPropertyOverviewProps {
  systemPropertyValues: SystemPropertyRow[];
  saveValues(values: SystemPropertyRow[]): void
}

function SystemPropertyOverview({
  systemPropertyValues,
  saveValues,
}: SystemPropertyOverviewProps) {
  const { t } = useTranslation();

  const [mode, setMode] = useState<Mode>("display");
  const [values, setValues] = useState(systemPropertyValues);

  const [valueBackup, setValueBackup] = useState<SystemPropertyRow[]>([]);

  const switchMode = () => {
    if (mode === "display") {
      setValueBackup(values);
      setMode("edit");
    } else {
      setMode("display");
      saveValues(values);
    }
  }

  const discardEdit = () => {
    setValues(valueBackup);
    setMode("display");
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={11}>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <colgroup>
              <col style={{ width: "30%"}} />
              <col style={{ width: "70%"}} />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>{t("systemPropertyOverview.title")}</TableCell>
                <TableCell align="left">{t("systemPropertyOverview.value")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values.map(({id, value, type}: SystemPropertyRow, index: number) => (
                <SystemPropertyDisplayRow
                  key={id}
                  label={t("subsystems." + id)}
                  type={type}
                  value={value}
                  mode={mode}
                  setValue={(newValue) => setValues(modifyAt(values, index, (systemPropertyRow: SystemPropertyRow) => ({...systemPropertyRow, value: newValue})))}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={1}>
        <Stack spacing={2} justifyContent="center" alignItems="left">
          <IconButton color="primary" onClick={switchMode}>
            {mode === "edit" ?
              <Save sx={{ fontSize: 60 }} /> :
              <Edit sx={{ fontSize: 60 }} />
            }
          </IconButton>
          {mode === "edit" &&
            <IconButton color="primary" onClick={discardEdit}>
              <Cancel sx={{ fontSize: 60 }} />
            </IconButton>
          }
        </Stack>
      </Grid>
    </Grid>

  );
}

export type Mode = "display" | "edit";

export default SystemPropertyOverview;


function modifyAt<T>(array: T[], index: number, modificationFunction: (old: T) => T): T[] {
  const ret = array.slice(0);
  ret[index] = modificationFunction(array[index]);
  return ret;
}