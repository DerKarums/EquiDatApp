import { Component, ComponentType } from '@/../../core/dist';
import { mapToComponentDetailModel, mapToComponentOverviewModel, mapToComponentTypeModel } from '@/mapping/components.mapper';
import ComponentsService from '@/services/components.service';
import { Controller, Get, Param, Post, QueryParam } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';

@Controller()
export class ComponentsController {
  public componentsService = new ComponentsService();

  @Get('/components')
  @OpenAPI({ summary: 'Return all components' })
  async getComponents() {
    const components: Component[] = await this.componentsService.allComponents();
    return components.map(component => mapToComponentOverviewModel(component))
  }

  @Get('/components/:componentId')
  @OpenAPI({ summary: 'Return the component with the given ID' })
  async getComponent(@Param('componentId') componentId: string) {

    const component: Component = await this.componentsService.getComponent(componentId);
    return mapToComponentDetailModel(component)
  }

  @Post('/components')
  @OpenAPI({ summary: 'Create a new empty component with the provided component type or duplicate an existing one via its ID' })
  async createComponent(
    @QueryParam("componentTypeId") componentTypeId: string,
    @QueryParam("duplicateComponentId") duplicateComponentId: string
  ) {
    if (duplicateComponentId && componentTypeId) {
      throw new Error("You must not provide both duplicateComponentId and componentTypeId")
    }
    let component: Component;
    if (componentTypeId) {
      component = await this.componentsService.createComponent(componentTypeId);
    } else if (duplicateComponentId) {
      component = await this.componentsService.duplicateComponent(duplicateComponentId);
    } else {
      throw new Error("You must either provide duplicateComponentId or componentTypeId")
    }

    return mapToComponentDetailModel(component)

  }

  @Get('/componentTypes')
  @OpenAPI({ summary: 'Return all component types' })
  async getComponentTypes() {
    const componentTypes: ComponentType[] = await this.componentsService.getComponentTypes();
    return componentTypes.map(componentType => mapToComponentTypeModel(componentType))
  }

}
