import { ManufacturingUnit } from '@/../../core/dist';
import { mapToManufacturingUnitOverviewModel } from '@/mapping/manufacturingUnits.mapper';
import ManufacturingUnitsService from '@/services/manufacturingUnits.service';
import { Controller, Get } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';

@Controller()
export class ManufacturingUnitsController {
  public manufacturingUnitsService = new ManufacturingUnitsService();

  @Get('/manufacturingUnits')
  @OpenAPI({ summary: 'Return all manufacturing units' })
  async getManufacturingUnits() {
    const manufacturinUnits: ManufacturingUnit[] = await this.manufacturingUnitsService.allManufacturingUnits();
    const dtos = manufacturinUnits.map(manufacturinUnit => mapToManufacturingUnitOverviewModel(manufacturinUnit))
    return dtos;
  }

}
