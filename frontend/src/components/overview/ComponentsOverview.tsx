import { AllComponentsCallbacks, Component, SubSystem, SystemProperty, DeleteComponentCallbacks, CreateComponentCallbacks } from 'core';
import { ComponentType, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCases } from '../../providers/UseCaseProvider';
import SubSystemOverview from './SubSystemOverview';


function ComponentsOverview() {
    const history = useHistory();

    const shownSystemPropertyIds = ["name", "manufacturer", "type_name_manufacturer"];

    const allComponentsUseCase = useCases.allComponentsUseCase;

    const [components, setComponents] = useState<Component[]>([]);
    const [shownSystemProperties, setShownSystemProperties] = useState<SystemProperty[]>([]);

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
        onComplete:()=>{
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
    }

    const selectSubSystem = (id: string): void => {
        history.push(`components/${id}`)
    }

    const deleteSubSystem = (id: string): void => {
        useCases.deleteComponentUseCase.deleteComponent(id,deleteCallback);
    }

    const duplicateSubSystem = (id: string): void => {
        useCases.createComponentUseCase.createDuplicateComponent(id, createCallback);
    }
    const createSubSystem = (): void => {
        useCases.createComponentUseCase.createComponent(type, createCallback);
    }

    useEffect(() => {
        allComponentsUseCase.getAllComponents(callback);
    }, [])

    useEffect(() => {
        allComponentsUseCase.getSystemPropertiesByIds(shownSystemPropertyIds, callback);
    }, [])

    return (
        <SubSystemOverview
            shownSystemProperties={ shownSystemProperties }
            shownSubsystems={ components }
            selectSubSystem={ selectSubSystem }
            deleteSubSystem={ deleteSubSystem}
            duplicateSubSystem={duplicateSubSystem}
            createSubSystem={createSubSystem}
        />
    )

}

export default ComponentsOverview;