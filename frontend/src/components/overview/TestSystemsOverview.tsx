import { AllTestSystemsCallbacks, SystemProperty, TestSystem } from 'core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCases } from '../../providers/UseCaseProvider';
import SubSystemOverview from './SubSystemOverview';


function TestSystemsOverview() {
    const history = useHistory();

    const shownSystemPropertyIds = ["name", "createdAt", "count"]

    const allTestSystemsUseCase = useCases.allTestSystemsUseCase;

    const [testSystems, setTestSystems] = useState<TestSystem[]>([]);
    const [shownSystemProperties, setShownSystemProperties] = useState<SystemProperty[]>([]);

    const callback: AllTestSystemsCallbacks = {
        setTestSystems: setTestSystems,
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
        history.push(`testSystems/${id}`)
    }

    useEffect(() => {
        allTestSystemsUseCase.getAllTestSystems(callback);
    }, [])

    useEffect(() => {
        allTestSystemsUseCase.getSystemPropertiesByIds(shownSystemPropertyIds, callback);
    }, [])

    return (
        <SubSystemOverview
            shownSystemProperties={ shownSystemProperties }
            shownSubsystems={ testSystems }
            selectSubSystem={ selectSubSystem }
        />
    )

}

export default TestSystemsOverview;