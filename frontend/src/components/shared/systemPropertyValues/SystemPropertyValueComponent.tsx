import { SystemPropertyType } from "core";
import { Mode } from "../../detail/SystemPropertyOverview";
import BooleanTypeSystemPropertyValueComponent from "./BooleanTypeSystemPropertyValueComponent";
import NumberTypeSystemPropertyValueComponent from "./NumberTypeSystemPropertyValueComponent";
import StringTypeSystemPropertyValueComponent from "./StringTypeSystemPropertyValueComponent";
import SystemPropertyValueProps from "./SystemPropertyValueProps";
import UrlTypeSystemPropertyValueComponent from "./UrlTypeSystemPropertyValueComponent";

interface SystemPropertyValueComponentProps {
    systemPropertyType: SystemPropertyType;
    mode: Mode;
    value: string | null;
    setValue(value: string | null): void;
}

const componentsBySystemPropertyType = new Map<SystemPropertyType, (props: SystemPropertyValueProps) => JSX.Element>([
    [SystemPropertyType.BooleanType, BooleanTypeSystemPropertyValueComponent],
    [SystemPropertyType.StringType, StringTypeSystemPropertyValueComponent],
    [SystemPropertyType.NumberType, NumberTypeSystemPropertyValueComponent],
    [SystemPropertyType.UrlType, UrlTypeSystemPropertyValueComponent],    
])

const SystemPropertyValueComponent = ({ systemPropertyType, mode, value, setValue }: SystemPropertyValueComponentProps) => {

    const getComponent = () => {
       return componentsBySystemPropertyType.get(systemPropertyType) ?? StringTypeSystemPropertyValueComponent;
    }

    const TypedComponent = getComponent();
    return (
        <TypedComponent
            mode={mode}
            value={value}
            setValue={setValue}
        />)
}

export default SystemPropertyValueComponent;