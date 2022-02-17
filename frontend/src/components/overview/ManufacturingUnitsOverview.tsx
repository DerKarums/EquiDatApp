import { AllManufacturingUnitsCallbacks, ManufacturingUnit, SystemProperty, DeleteManufacturingUnitCallbacks, CreateManufacturingUnitCallbacks } from 'core';
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

    const createCallback: CreateManufacturingUnitCallbacks = {
        onDuplicateComplete: () => {
            allManufacturingUnitsUseCase.getAllManufacturingUnits(callback);
        },
        onCreateComplete: () => {
            allManufacturingUnitsUseCase.getAllManufacturingUnits(callback);
        },
    }

    const selectSubSystem = (id: string): void => {
        history.push(`manufacturingUnits/${id}`)
    }

    const deleteSubSystem = (id:string): void => {
        useCases.deleteManufacturingUnitUseCase.deleteManufacturingUnit(id,deleteCallback);
    }

    const duplicateSubSystem = (id: string): void => {
        useCases.createManufacturingUnitUseCase.createDuplicateManufacturingUnit(id, createCallback);
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
            deleteSubSystem={deleteSubSystem}
            duplicateSubSystem={duplicateSubSystem}
        />
    )

}

export default ManufacturingUnitsOverview;