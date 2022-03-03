import { Component, ComponentDetailModel, ComponentOverviewModel, ComponentType, ComponentTypeModel } from '@/../../core/dist';
import { mapToComponentDetailModel, mapToComponentOverviewModel, mapToComponentTypeModel } from '@/mapping/components.mapper';
import ComponentsService from '@/services/components.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, QueryParam } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';

@Controller()
export class ComponentsController {
  public componentsService = new ComponentsService();

  @Get('/components')
  @OpenAPI({ summary: 'Return all components' })
  async getComponents(): Promise<ComponentOverviewModel[]> {
    const components: Component[] = await this.componentsService.allComponents();
    return components.map(component => mapToComponentOverviewModel(component))
  }

  @Get('/components/:componentId')
  @OpenAPI({ summary: 'Return the component with the given ID' })
  async getComponent(@Param('componentId') componentId: string): Promise<ComponentDetailModel> {

    const component: Component = await this.componentsService.getComponent(componentId);
    return mapToComponentDetailModel(component)
  }

  @Post('/components')
  @OpenAPI({ summary: 'Create a new empty component with the provided component type or duplicate an existing one via its ID' })
  async createComponent(
    @QueryParam("componentTypeId") componentTypeId: string,
    @QueryParam("duplicateComponentId") duplicateComponentId: string
  ): Promise<ComponentDetailModel> {
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

  @Delete('/components/:componentId')
  @OpenAPI({ summary: 'Delete the component with the given ID' })
  async deleteComponent(@Param('componentId') componentId: string): Promise<string> {
    await this.componentsService.deleteComponent(componentId);
    return "success"
  }

  @Get('/componentTypes')
  @OpenAPI({ summary: 'Return all component types' })
  async getComponentTypes(): Promise<ComponentTypeModel[]> {
    const componentTypes: ComponentType[] = await this.componentsService.getComponentTypes();
    return componentTypes.map(componentType => mapToComponentTypeModel(componentType))
  }

  @Put('/components/:componentId')
  @OpenAPI({ summary: 'Edit the component by providing a new array of system properties' })
  async editComponent(
    @Param('componentId') componentId: string,
    @Body() newValues: Map<string, string>,
  ): Promise<ComponentDetailModel> {
    const component = await this.componentsService.editComponent(componentId, newValues);
    return mapToComponentDetailModel(component);
  }

}
