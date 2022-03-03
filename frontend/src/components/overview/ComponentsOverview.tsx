import { AllComponentsCallbacks, Component, SubSystem, SystemProperty, DeleteComponentCallbacks, ComponentType, CreateComponentCallbacks } from 'core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createComponentUseCase, useCases } from '../../providers/UseCaseProvider';
import ComponentTypeDialog from './ComponentTypeDialog';
import SubSystemOverview from './SubSystemOverview';

function ComponentsOverview() {
    const history = useHistory();

    const shownSystemPropertyIds = ["name", "manufacturer", "type_name_manufacturer"];
    const [value, setValue] = useState('');

    const allComponentsUseCase = useCases.allComponentsUseCase;

    const [components, setComponents] = useState<Component[]>([]);
    const [shownSystemProperties, setShownSystemProperties] = useState<SystemProperty[]>([]);

    useEffect(() =>{
        createComponentUseCase.getComponentTypes(createCallback);
    },[])

    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [types, setTypes] = useState<string[]>([]);
    const callback: AllComponentsCallbacks = {
        setComponents: setComponents,
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

    const deleteCallback: DeleteComponentCallbacks = {
        onComplete: () => {
            allComponentsUseCase.getAllComponents(callback);
        }
    }

    const createCallback: CreateComponentCallbacks = {
        onDuplicateComplete: () => {
            allComponentsUseCase.getAllComponents(callback);
        },
        onCreateComplete: () => {
            allComponentsUseCase.getAllComponents(callback);
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
        const newComponent = useCases.createComponentUseCase.createComponent(value, createCallback);
        selectSubSystem(newComponent.id);
    }

    useEffect(() => {
        allComponentsUseCase.getAllComponents(callback);
    }, [])

    useEffect(() => {
        allComponentsUseCase.getSystemPropertiesByIds(shownSystemPropertyIds, callback);
    }, [])

    return (
        <div>
            <SubSystemOverview
                shownSystemProperties={shownSystemProperties}
                shownSubsystems={components}
                selectSubSystem={selectSubSystem}
                deleteSubSystem={deleteSubSystem}
                duplicateSubSystem={duplicateSubSystem}
                createSubSystem={createSubSystem}
            />
            {showDialog && <ComponentTypeDialog
                onClose={handleCloseDialog} open={showDialog} setOpen={setShowDialog} options={types}  />}
        </div>
    )

}

export default ComponentsOverview;