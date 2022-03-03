import { ManufacturingUnit, Component } from '@/../../core/dist';
import { mapToManufacturingUnitOverviewModel } from '@/mapping/manufacturingUnits.mapper';
import { mapToComponentOverviewModel } from '@/mapping/components.mapper';
import ManufacturingUnitsService from '@/services/manufacturingUnits.service';
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
