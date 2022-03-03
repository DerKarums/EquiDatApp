import { DeleteTestSystemCallbacks, TestSystemOverviewModel } from 'core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../httpclient/axiosProvider';
import { mapToTestSystemDetailModel, mapToTestSystemOverviewModel } from '../../mappers/viewmapper';
import { useCases } from '../../providers/UseCaseProvider';
import SubSystemOverview from './SubSystemOverview';


function TestSystemsOverview() {
    const history = useHistory();

    const shownSystemPropertyIds = ["name", "diagram_id", "installation_date", "test_type"]

    const [testSystems, setTestSystems] = useState<TestSystemOverviewModel[]>([]);

    const reloadTestSystems = () => {
        axiosInstance.get('/testSystems')
            .then(response => response.data.map((testSystem: any) => mapToTestSystemOverviewModel(testSystem)))
            .then((testSystemModels: TestSystemOverviewModel[]) => setTestSystems(testSystemModels))
    }

    const deleteCallback: DeleteTestSystemCallbacks = {
        onComplete: () => {
            reloadTestSystems();
        }
    }


    const selectSubSystem = (id: string): void => {
        history.push(`testSystems/${id}`)
    }

    const deleteSubSystem = (id: string): void => {
        useCases.deleteTestSystemUseCase.deleteTestSystem(id, deleteCallback);
    }

    const createSubSystem = (): void => {
        axiosInstance.post('/testSystems')
            .then(response => response.data)
            .then(testSystem => mapToTestSystemDetailModel(testSystem))
            .then((TestSystemDetailModel) => selectSubSystem(TestSystemDetailModel.id))
    }

    const duplicateSubSystem = (id: string): void => {
        axiosInstance.post('/testSystems', null, {params: {duplicateTestSystemId: id}})
            .then(() => reloadTestSystems())
    }

    useEffect(() => {
        reloadTestSystems();
    }, [])

    return (
        <SubSystemOverview
            shownSystemPropertyIds={shownSystemPropertyIds}
            shownSubsystems={testSystems}
            selectSubSystem={selectSubSystem}
            deleteSubSystem={deleteSubSystem}
            duplicateSubSystem={duplicateSubSystem}
            createSubSystem={createSubSystem}
        />
    )
}

export default TestSystemsOverview;