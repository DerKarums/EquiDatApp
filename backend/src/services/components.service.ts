import { allComponentsUseCase, showComponentUseCase } from '@/providers/UseCaseProvider';
import { Component } from 'core';

class ComponentsService {
  public async allComponents(): Promise<Component[]> {

    const components = await allComponentsUseCase.getAllComponents();
    
    return components;
  }

  public async getComponent(componentId: string): Promise<Component> {
    return await showComponentUseCase.getComponent(componentId);
  }

}

export default ComponentsService;
