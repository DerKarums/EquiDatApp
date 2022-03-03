import { Component } from '@/../../core/dist';
import { mapToComponentDetailModel, mapToComponentOverviewModel } from '@/mapping/components.mapper';
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
  @OpenAPI({ summary: 'Create a new empty component with the provided component type' })
  async createComponent(@QueryParam("componentTypeId") componentTypeId: string) {
    const component: Component = await this.componentsService.createComponent(componentTypeId);
    return mapToComponentDetailModel(component)
  }

}
