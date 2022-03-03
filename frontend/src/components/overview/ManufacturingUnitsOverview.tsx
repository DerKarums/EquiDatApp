import { DeleteManufacturingUnitCallbacks, ManufacturingUnitOverviewModel } from 'core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../httpclient/axiosProvider';
import { mapToManufacturingUnitDetailModel, mapToManufacturingUnitOverviewModel } from '../../mappers/viewmapper';
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

    const selectSubSystem = (id: string): void => {
        history.push(`manufacturingUnits/${id}`)
    }

    const deleteSubSystem = (id: string): void => {
        useCases.deleteManufacturingUnitUseCase.deleteManufacturingUnit(id, deleteCallback);
    }

    const duplicateSubSystem = (id: string): void => {
        axiosInstance.post('/manufacturingUnits', null, {params: {duplicateManufacturingUnitId: id}})
            .then(() => reloadManufacturingUnits())
    }

    const createSubSystem = (): void => {
        axiosInstance.post('/manufacturingUnits')
            .then(response => response.data)
            .then(manufacturingUnit => mapToManufacturingUnitDetailModel(manufacturingUnit))
            .then((manufacturingUnitDetailModel) => selectSubSystem(manufacturingUnitDetailModel.id))
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