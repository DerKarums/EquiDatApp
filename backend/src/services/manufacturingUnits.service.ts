import { allManufacturingUnitsUseCase } from '@/providers/UseCaseProvider';
import { ManufacturingUnit } from 'core';

class ManufacturingUnitsService {


  public async allManufacturingUnits(): Promise<ManufacturingUnit[]> {

    const manufacturingUnits = await allManufacturingUnitsUseCase.getAllManufacturingUnits()
    
    return manufacturingUnits;
  }

}

export default ManufacturingUnitsService;
