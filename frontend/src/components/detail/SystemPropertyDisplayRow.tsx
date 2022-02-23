import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Input from '@mui/material/Input';
import { SystemProperty } from "core";
import { Mode } from './SystemPropertyOverview';
import { useTranslation } from "react-i18next";

interface SystemPropertyDisplayRowProps {
    systemProperty: SystemProperty;
    value: string | null;
    mode?: Mode;
    setValue(value: string): void;
}

const SystemPropertyDisplayRow = ({ systemProperty, value, mode, setValue }: SystemPropertyDisplayRowProps) => {
    const { t } = useTranslation();
    const handleValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <TableRow
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {t("subsystems." + systemProperty.id)}
            </TableCell>
            <TableCell align="left">
                <Input
                    fullWidth
                    type="text"
                    disabled={mode !== "edit"}
                    value={mode !== "edit" && !value ? "#" : value}
                    onChange={handleValueChanged}
                />
            </TableCell>
        </TableRow>)
}

export default SystemPropertyDisplayRow;