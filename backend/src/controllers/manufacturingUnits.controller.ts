import { ManufacturingUnit, ManufacturingUnitDetailModel } from '@/../../core/dist';
import { mapToManufacturingUnitDetailModel, mapToManufacturingUnitOverviewModel } from '@/mapping/manufacturingUnits.mapper';
import ManufacturingUnitsService from '@/services/manufacturingUnits.service';
import { Body, Controller, Delete, Get, Param, Post, Put, QueryParam } from 'routing-controllers';
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

  @Delete('/manufacturingUnits/:manufacturingUnitId')
  @OpenAPI({ summary: 'Delete the manufacturing unit with the given ID' })
  async deleteManufacturingUnit(@Param('manufacturingUnitId') manufacturingUnitId: string): Promise<string> {
    await this.manufacturingUnitsService.deleteManufacturingUnit(manufacturingUnitId);
    return "success";
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

  @Put('/manufacturingUnits/:manufacturingUnitId')
  @OpenAPI({ summary: 'Edit the manufacturing unit by providing a new array of system properties' })
  async editManufacturingUnit(
    @Param('manufacturingUnitId') manufacturingUnitId: string,
    @Body() newValues: any,
  ): Promise<ManufacturingUnitDetailModel> {
    
    // has to be manually converted to Map due to a limitation of class-transformer
    // see https://github.com/typestack/class-transformer/issues/288
    const newValuesMap = new Map<string, string>(Object.entries(newValues));

    const manufacturingUnit = await this.manufacturingUnitsService.editManufacturingUnit(manufacturingUnitId, newValuesMap);
    return mapToManufacturingUnitDetailModel(manufacturingUnit);
  }

}
