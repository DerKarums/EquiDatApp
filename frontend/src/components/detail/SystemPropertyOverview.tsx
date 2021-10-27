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

interface SystemPropertyOverviewProps {
  systemPropertyValues: Map<SystemProperty, string | null>;
  saveValues(values: [SystemProperty, string | null][]): void
}

function SystemPropertyOverview({
  systemPropertyValues,
  saveValues,
}: SystemPropertyOverviewProps) {

  const [mode, setMode] = useState<Mode>("display");
  const [values, setValues] = useState(Array.from(systemPropertyValues));

  const [valueBackup, setValueBackup] = useState<[SystemProperty, string | null][]>([]);

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
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Bezeichnung</TableCell>
                <TableCell align="left">Wert</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values.map(([systemProperty, value], index) => (
                <SystemPropertyDisplayRow
                  key={systemProperty.id}
                  systemProperty={systemProperty}
                  value={value}
                  mode={mode}
                  setValue={(newValue) => setValues(modifyAt(values, index, ([key, _]: [SystemProperty, string | null]) => [key, newValue]))}
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