import { ComponentOverviewModel, ComponentType, CreateComponentCallbacks, DeleteComponentCallbacks } from 'core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../httpclient/axiosProvider';
import { mapToComponentOverviewModel } from '../../mappers/viewmapper';
import { createComponentUseCase, useCases } from '../../providers/UseCaseProvider';
import ComponentTypeDialog from './ComponentTypeDialog';
import SubSystemOverview from './SubSystemOverview';

function ComponentsOverview() {
    const history = useHistory();

    const shownSystemPropertyIds = ["name", "manufacturer", "type_name_manufacturer"];
    const [value, setValue] = useState('');

    const [components, setComponents] = useState<ComponentOverviewModel[]>([]);

    useEffect(() => {
        createComponentUseCase.getComponentTypes(createCallback);
    }, [])

    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [types, setTypes] = useState<string[]>([]);

    const reloadComponents = () => {
        axiosInstance.get('/components')
            .then(response => response.data.map((component: any) => mapToComponentOverviewModel(component)))
            .then((componentModels: ComponentOverviewModel[]) => setComponents(componentModels))
    }

    const deleteCallback: DeleteComponentCallbacks = {
        onComplete: () => {
            reloadComponents();
        }
    }

    const createCallback: CreateComponentCallbacks = {
        onDuplicateComplete: () => {
            reloadComponents();
        },
        onCreateComplete: () => {
            reloadComponents();
        },
        setComponentTypes: (pTypes: ComponentType[]) => {

            setTypes(pTypes.map(componentType => componentType.id));
        },
    }

    const selectSubSystem = (id: string): void => {
        history.push(`components/${id}`)
    }

    const deleteSubSystem = (id: string): void => {
        useCases.deleteComponentUseCase.deleteComponent(id, deleteCallback);
    }

    const duplicateSubSystem = (id: string): void => {
        useCases.createComponentUseCase.createDuplicateComponent(id, createCallback);
    }

    const createSubSystem = (): void => {
        setShowDialog(true);
    }

    const handleCloseDialog = (value: string): void => {
        setValue(value);
        useCases.createComponentUseCase.createComponent(value, createCallback)
            .then(component => selectSubSystem(component.id));
    }

    useEffect(() => {
        reloadComponents();
    }, [])



    return (
        <div>
            <SubSystemOverview
                shownSystemPropertyIds={shownSystemPropertyIds}
                shownSubsystems={components}
                selectSubSystem={selectSubSystem}
                deleteSubSystem={deleteSubSystem}
                duplicateSubSystem={duplicateSubSystem}
                createSubSystem={createSubSystem}
            />
            {showDialog && <ComponentTypeDialog
                onClose={handleCloseDialog} open={showDialog} setOpen={setShowDialog} options={types} />}
        </div>
    )

}

export default ComponentsOverview;