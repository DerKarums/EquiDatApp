import { allComponentsUseCase } from '@/providers/UseCaseProvider';
import { Component } from 'core';

class ComponentsService {


  public async allComponents(): Promise<Component[]> {

    const components = await allComponentsUseCase.getAllComponents();
    
    return components;
  }

}

export default ComponentsService;
