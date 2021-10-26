import { AllComponentsCallbacks, Component, SystemProperty } from 'core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCases } from '../../providers/UseCaseProvider';
import SubSystemOverview from './SubSystemOverview';


function ComponentsOverview() {
    const history = useHistory();

    const shownSystemPropertyIds = ["name", "createdAt", "count"]

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

    const selectSubSystem = (id: string): void => {
        history.push(`components/${id}`)
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
        />
    )

}

export default ComponentsOverview;