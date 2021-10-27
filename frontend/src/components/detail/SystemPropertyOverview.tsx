import {
  Table,
  TableRow,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { SystemProperty } from "core";

interface SystemPropertyOverviewProps {
  systemPropertyValues: Map<SystemProperty, string | null>;
}

function SystemPropertyOverview({
  systemPropertyValues,
}: SystemPropertyOverviewProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Bezeichnung</TableCell>
            <TableCell align="left">Wert</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(systemPropertyValues).map(([systemProperty, value]) => (
            <TableRow
              key={systemProperty.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {systemProperty.label}
              </TableCell>
              <TableCell align="left">{value ? value : "#"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SystemPropertyOverview;
