import { ManufacturingUnit } from '@/../../core/dist';
import { mapToManufacturingUnitDetailModel, mapToManufacturingUnitOverviewModel } from '@/mapping/manufacturingUnits.mapper';
import ManufacturingUnitsService from '@/services/manufacturingUnits.service';
import { Controller, Get, Param, Post, QueryParam } from 'routing-controllers';
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

  @Get('/manufacturingUnits/:manufacturingUnitId')
  @OpenAPI({ summary: 'Return the manufacturing unit with the given ID' })
  async getManufacturingUnit(@Param('manufacturingUnitId') manufacturingUnitId: string) {

    const manufacturingUnit: ManufacturingUnit = await this.manufacturingUnitsService.getManufacturingUnit(manufacturingUnitId);
    return mapToManufacturingUnitDetailModel(manufacturingUnit)
  }


  @Post('/manufacturingUnits/')
  @OpenAPI({ summary: 'Create a new empty manufacturing unit or duplicate one via its ID' })
  async createManufacturingUnit(
    @QueryParam("duplicateManufacturingUnitId") duplicateManufacturingUnitId: string
  ) {

    let manufacturingUnit: ManufacturingUnit;
    if (duplicateManufacturingUnitId) {
      manufacturingUnit = await this.manufacturingUnitsService.duplicateManufacturingUnit(duplicateManufacturingUnitId);
    } else {
      manufacturingUnit = await this.manufacturingUnitsService.createManufacturingUnit();
    }
    return mapToManufacturingUnitDetailModel(manufacturingUnit)
  }


}
