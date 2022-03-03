import { CreateManufacturingUnitCallbacks, DeleteManufacturingUnitCallbacks, ManufacturingUnitOverviewModel } from 'core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../httpclient/axiosProvider';
import { mapToManufacturingUnitOverviewModel } from '../../mappers/viewmapper';
import { useCases } from '../../providers/UseCaseProvider';
import SubSystemOverview from './SubSystemOverview';


function ManufacturingUnitsOverview() {
    const history = useHistory();

    const shownSystemPropertyIds = ["name", "location", "products", "manufacturing_controller", "size"]

    const [manufacturingUnits, setManufacturingUnits] = useState<ManufacturingUnitOverviewModel[]>([]);


    const reloadManufacturingUnits = () => {
        axiosInstance.get('/manufacturingUnits')
            .then(response => response.data.map((manufacturingUnit: any) => mapToManufacturingUnitOverviewModel(manufacturingUnit)))
            .then((manufacturingUnitModels: ManufacturingUnitOverviewModel[]) => setManufacturingUnits(manufacturingUnitModels))
    }

    const deleteCallback: DeleteManufacturingUnitCallbacks = {
        onComplete: () => {
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

    const deleteSubSystem = (id: string): void => {
        useCases.deleteManufacturingUnitUseCase.deleteManufacturingUnit(id, deleteCallback);
    }

    const duplicateSubSystem = (id: string): void => {
        useCases.createManufacturingUnitUseCase.createDuplicateManufacturingUnit(id, createCallback);
    }

    const createSubSystem = (): void => {
        useCases.createManufacturingUnitUseCase.createManufacturingUnit(createCallback)
            .then(manufacturingUnit => selectSubSystem(manufacturingUnit.id));

    }

    useEffect(() => {
        reloadManufacturingUnits()
    }, [])

    return (
        <SubSystemOverview
            shownSystemPropertyIds={shownSystemPropertyIds}
            shownSubsystems={manufacturingUnits}
            selectSubSystem={selectSubSystem}
            deleteSubSystem={deleteSubSystem}
            duplicateSubSystem={duplicateSubSystem}
            createSubSystem={createSubSystem}
        />
    )

}

export default ManufacturingUnitsOverview;