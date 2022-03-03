import { allComponentsUseCase, createComponentUseCase, deleteComponentUseCase, showComponentUseCase } from '@/providers/UseCaseProvider';
import { Component, ComponentType } from 'core';

class ComponentsService {



  public async allComponents(): Promise<Component[]> {

    const components = await allComponentsUseCase.getAllComponents();

    return components;
  }

  public async getComponent(componentId: string): Promise<Component> {
    return await showComponentUseCase.getComponent(componentId);
  }

  public async createComponent(componentTypeId: string): Promise<Component> {
    return await createComponentUseCase.createComponent(componentTypeId);
  }

  public async getComponentTypes(): Promise<ComponentType[]> {
    return await createComponentUseCase.getComponentTypes();
  }

  public async duplicateComponent(duplicateComponentId: string): Promise<Component> {
    return await createComponentUseCase.createDuplicateComponent(duplicateComponentId);
  }

  public async deleteComponent(componentId: string): Promise<void> {
    return deleteComponentUseCase.deleteComponent(componentId);
  }
}

export default ComponentsService;
