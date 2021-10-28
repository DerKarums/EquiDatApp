import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Input from '@mui/material/Input';
import { SystemProperty } from "core";
import { Mode } from './SystemPropertyOverview';
import StringTypeSystemPropertyValueComponent from '../shared/systemPropertyValues/StringTypeSystemPropertyValueComponent';

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
                <StringTypeSystemPropertyValueComponent
                    mode={mode}
                    value={value}
                    setValue={setValue}
                />
            </TableCell>
        </TableRow>)
}

export default SystemPropertyDisplayRow;