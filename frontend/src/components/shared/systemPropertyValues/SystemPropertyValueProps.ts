import { Mode } from "../../detail/SystemPropertyOverview";

interface SystemPropertyValueProps {
    mode: Mode;
    value: string | null;
    setValue(value: string | null): void;
}

export default SystemPropertyValueProps;