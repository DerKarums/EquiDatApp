import { AllTestSystemsCallbacks, SystemProperty, TestSystem, DeleteTestSystemCallbacks, CreateTestSystemCallbacks, TestSystemOverviewModel } from 'core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../httpclient/axiosProvider';
import { useCases } from '../../providers/UseCaseProvider';
import SubSystemOverview from './SubSystemOverview';


function TestSystemsOverview() {
    const history = useHistory();

    const shownSystemPropertyIds = ["name", "diagram_id", "installation_date", "test_type"]

    const allTestSystemsUseCase = useCases.allTestSystemsUseCase;

    const [testSystems, setTestSystems] = useState<TestSystemOverviewModel[]>([]);
    const [shownSystemProperties, setShownSystemProperties] = useState<SystemProperty[]>([]);

    const callback: AllTestSystemsCallbacks = {
        setTestSystems: () => {},
        setRequestedSystemProperties: (systemPropertiesByIds: {
            systemProperty: SystemProperty | null;
            id: string;
        }[]) => {
            setShownSystemProperties(systemPropertiesByIds
                .map(systemPropertiesByIds => systemPropertiesByIds.systemProperty)
                .filter(systemProperty => systemProperty !== null) as SystemProperty[]
            )
        },
        setFilterOptions: () => {},
        setSearchResults: () => {},    
    }

    const reloadTestSystems = () => {
        axiosInstance.get('/testSystems')
            .then(response => response.data)
            .then(entries => entries.map((entry: any) => ({...entry, systemPropertyValues: new Map(Object.entries(entry.systemPropertyValues))})))
            .then((testSystemModels: TestSystemOverviewModel[]) => setTestSystems(testSystemModels))
    }

    const deleteCallback: DeleteTestSystemCallbacks = {
        onComplete:()=>{
            reloadTestSystems();
        }
    }

    const createCallback: CreateTestSystemCallbacks = {
        onDuplicateComplete: () => {
            reloadTestSystems();
        },
        onCreateComplete: () => {
            reloadTestSystems();
        },
    }


    const selectSubSystem = (id: string): void => {
        history.push(`testSystems/${id}`)
    }
    
    const deleteSubSystem = (id: string): void => {
        useCases.deleteTestSystemUseCase.deleteTestSystem(id,deleteCallback);
    }

    const createSubSystem = (): void => {
        useCases.createTestSystemUseCase.createTestSystem(createCallback)
            .then(newTestSystem => selectSubSystem(newTestSystem.id));
    }

    const duplicateSubSystem = (id: string): void => {
        useCases.createTestSystemUseCase.createDuplicateTestSystem(id, createCallback);
    }

    useEffect(() => {
        reloadTestSystems();
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