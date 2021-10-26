import { AllManufacturingUnitsCallbacks, ManufacturingUnit, SystemProperty } from 'core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCases } from '../../providers/UseCaseProvider';
import SubSystemOverview from './SubSystemOverview';


function ManufacturingUnitsOverview() {
    const history = useHistory();

    const shownSystemPropertyIds = ["name", "location", "building"]

    const allManufacturingUnitsUseCase = useCases.allManufacturingUnitsUseCase;

    const [manufacturingUnits, setManufacturingUnits] = useState<ManufacturingUnit[]>([]);
    const [shownSystemProperties, setShownSystemProperties] = useState<SystemProperty[]>([]);

    const callback: AllManufacturingUnitsCallbacks = {
        setManufacturingUnits: setManufacturingUnits,
        setRequestedSystemProperties: (systemPropertiesByIds: {
            systemProperty: SystemProperty | null;
            id: string;
        }[]) => {
            setShownSystemProperties(systemPropertiesByIds
                .map(systemPropertiesByIds => systemPropertiesByIds.systemProperty)
                .filter(systemProperty => systemProperty !== null) as SystemProperty[]
            )
        }
    }

    const selectSubSystem = (id: string): void => {
        history.push(`manufacturingUnits/${id}`)
    }

    useEffect(() => {
        allManufacturingUnitsUseCase.getAllManufacturingUnits(callback);
    }, [])

    useEffect(() => {
        allManufacturingUnitsUseCase.getSystemPropertiesByIds(shownSystemPropertyIds, callback);
    }, [])

    return (
        <SubSystemOverview
            shownSystemProperties={ shownSystemProperties }
            shownSubsystems={ manufacturingUnits }
            selectSubSystem={ selectSubSystem }
        />
    )

}

export default ManufacturingUnitsOverview;