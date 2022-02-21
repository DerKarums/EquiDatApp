import { AllManufacturingUnitsCallbacks, ManufacturingUnit, SystemProperty, DeleteManufacturingUnitCallbacks } from 'core';
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

    const deleteCallback: DeleteManufacturingUnitCallbacks = {
        onComplete:()=>{
            allManufacturingUnitsUseCase.getAllManufacturingUnits(callback);
        }
    }

    const selectSubSystem = (id: string): void => {
        history.push(`manufacturingUnits/${id}`)
    }

    const deleteSubSystem = (id:string): void => {
        useCases.deleteManufacturingUnitUseCase.deleteManufacturingUnit(id,deleteCallback);
    }

    useEffect(() => {
        allManufacturingUnitsUseCase.getAllManufacturingUnits(callback);
    }, [])

    useEffect(() => {
        allManufacturingUnitsUseCase.getSystemPropertiesByIds(shownSystemPropertyIds, callback);
    }, [])

    const typeOfSubSystem = "manufacturing_unit_schema"

    return (
        <SubSystemOverview
            shownSystemProperties={ shownSystemProperties }
            shownSubsystems={ manufacturingUnits }
            selectSubSystem={ selectSubSystem }
            deleteSubSystem={deleteSubSystem}
            typeOfSubSystem={typeOfSubSystem}
        />
    )

}

export default ManufacturingUnitsOverview;