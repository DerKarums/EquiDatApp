import { ComponentDetailModel, ComponentOverviewModel, ComponentTypeModel } from 'core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../httpclient/axiosProvider';
import { mapToComponentOverviewModel } from '../../mappers/viewmapper';
import ComponentTypeDialog from './ComponentTypeDialog';
import SubSystemOverview from './SubSystemOverview';

function ComponentsOverview() {
    const history = useHistory();

    const shownSystemPropertyIds = ["name", "manufacturer", "type_name_manufacturer"];
    const [value, setValue] = useState('');

    const [components, setComponents] = useState<ComponentOverviewModel[]>([]);

    useEffect(() => {
        axiosInstance.get('/componentTypes')
            .then(response => response.data)
            .then(componentTypes => setTypes(componentTypes.map((componentType: ComponentTypeModel) => componentType.id)));
    }, [])

    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [types, setTypes] = useState<string[]>([]);

    const reloadComponents = () => {
        axiosInstance.get('/components')
            .then(response => response.data.map((component: any) => mapToComponentOverviewModel(component)))
            .then((componentModels: ComponentOverviewModel[]) => setComponents(componentModels))
    }

    const selectSubSystem = (id: string): void => {
        history.push(`components/${id}`)
    }

    const deleteSubSystem = (id: string): void => {
        axiosInstance.delete(`/components/${id}`)
            .then(() => reloadComponents())
    }

    const duplicateSubSystem = (id: string): void => {
        axiosInstance.post('/components', null, {params: {duplicateComponentId: id}})
            .then(() => reloadComponents())
    }

    const createSubSystem = (): void => {
        setShowDialog(true);
    }

    const handleCloseDialog = (componentTypeId: string): void => {
        setValue(componentTypeId);

        axiosInstance.post('/components', null, {params: {componentTypeId}})
            .then(response => response.data)
            .then(component => mapToComponentOverviewModel(component))
            .then((componentModel: ComponentDetailModel) => selectSubSystem(componentModel.id))
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