import { AllTestSystemsCallbacks, SystemProperty, TestSystem, DeleteTestSystemCallbacks, CreateTestSystemCallbacks } from 'core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCases } from '../../providers/UseCaseProvider';
import SubSystemOverview from './SubSystemOverview';


function TestSystemsOverview() {
    const history = useHistory();

    const shownSystemPropertyIds = ["name", "diagram_id", "installation_date", "test_type"]

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

    const deleteCallback: DeleteTestSystemCallbacks = {
        onComplete:()=>{
            allTestSystemsUseCase.getAllTestSystems(callback);
        }
    }

    const createCallback: CreateTestSystemCallbacks = {
        onDuplicateComplete: () => {
            allTestSystemsUseCase.getAllTestSystems(callback);
        },
        onCreateComplete: () => {
            allTestSystemsUseCase.getAllTestSystems(callback);
        },
    }


    const selectSubSystem = (id: string): void => {
        history.push(`testSystems/${id}`)
    }
    
    const deleteSubSystem = (id: string): void => {
        useCases.deleteTestSystemUseCase.deleteTestSystem(id,deleteCallback);
    }

    const createSubSystem = (model: TestSystem): void => {
        useCases.createTestSystemUseCase.createTestSystem(model, createCallback);
    }

    const duplicateSubSystem = (id: string): void => {
        useCases.createTestSystemUseCase.createDuplicateTestSystem(id, createCallback);
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
            deleteSubSystem={ deleteSubSystem }
            duplicateSubSystem={duplicateSubSystem}
            createSubSystem={createSubSystem}
        />
    )

}

export default TestSystemsOverview;