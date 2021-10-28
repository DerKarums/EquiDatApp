import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { SystemProperty } from "core";
import { Mode } from './SystemPropertyOverview';
import SystemPropertyValueComponent from '../shared/systemPropertyValues/SystemPropertyValueComponent';

interface SystemPropertyDisplayRowProps {
    systemProperty: SystemProperty;
    value: string | null;
    mode: Mode;
    setValue(value: string | null): void;
}

const SystemPropertyDisplayRow = ({ systemProperty, value, mode, setValue }: SystemPropertyDisplayRowProps) => {
    return (
        <TableRow
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {systemProperty.label}
            </TableCell>
            <TableCell align="left">
                <SystemPropertyValueComponent
                    systemPropertyType={systemProperty.type}
                    mode={mode}
                    value={value}
                    setValue={setValue}
                />
            </TableCell>
        </TableRow>)
}

export default SystemPropertyDisplayRow;