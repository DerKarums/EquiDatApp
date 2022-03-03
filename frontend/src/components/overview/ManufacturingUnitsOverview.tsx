import * as React from 'react';
import { AllManufacturingUnitsCallbacks, ManufacturingUnit, ManufacturingUnitOverviewModel, SystemProperty, DeleteManufacturingUnitCallbacks, CreateManufacturingUnitCallbacks } from 'core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCases } from '../../providers/UseCaseProvider';
import SubSystemOverview from './SubSystemOverview';
import axiosInstance from '../../httpclient/axiosProvider';


function ManufacturingUnitsOverview() {
    const history = useHistory();

    const shownSystemPropertyIds = ["name", "location", "products", "manufacturing_controller", "size"]

    const allManufacturingUnitsUseCase = useCases.allManufacturingUnitsUseCase;

    const [manufacturingUnits, setManufacturingUnits] = useState<ManufacturingUnitOverviewModel[]>([]);
    const [shownSystemProperties, setShownSystemProperties] = useState<SystemProperty[]>([]);

    const callback: AllManufacturingUnitsCallbacks = {
        setManufacturingUnits: () => {},
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

    const reloadManufacturingUnits = () => {
        axiosInstance.get('/manufacturingUnits')
            .then(response => response.data)
            .then(entries => entries.map((entry: any) => ({...entry, systemPropertyValues: new Map(Object.entries(entry.systemPropertyValues))})))
            .then((manufacturingUnitModels: ManufacturingUnitOverviewModel[]) => setManufacturingUnits(manufacturingUnitModels))
    }

    const deleteCallback: DeleteManufacturingUnitCallbacks = {
        onComplete:()=>{
            reloadManufacturingUnits()
        }
    }

    const createCallback: CreateManufacturingUnitCallbacks = {
        onDuplicateComplete: () => {
            reloadManufacturingUnits()
        },
        onCreateComplete: () => {
            reloadManufacturingUnits()
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

    const createSubSystem = (): void => {
        const unit =  useCases.createManufacturingUnitUseCase.createManufacturingUnit(createCallback)
        selectSubSystem(unit.id);
    }

    useEffect(() => {
        reloadManufacturingUnits()
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
            createSubSystem={createSubSystem}
        />
    )

}

export default ManufacturingUnitsOverview;