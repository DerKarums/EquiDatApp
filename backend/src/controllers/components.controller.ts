import { Component } from '@/../../core/dist';
import { mapToComponentOverviewModel } from '@/mapping/components.mapper';
import ComponentsService from '@/services/components.service';
import { Controller, Get } from 'routing-controllers';
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

}
