import { allManufacturingUnitsUseCase, createManufacturingUnitUseCase, deleteManufacturingUnitUseCase, editManufacturingUnitUseCase, showManufacturingUnitsUseCase } from '@/providers/UseCaseProvider';
import { ManufacturingUnit } from 'core';

class ManufacturingUnitsService {

  public async allManufacturingUnits(): Promise<ManufacturingUnit[]> {
    return await allManufacturingUnitsUseCase.getAllManufacturingUnits()
  }

  public async getManufacturingUnit(manufacturingUnitId: string): Promise<ManufacturingUnit> {
    return await showManufacturingUnitsUseCase.getManufacturingUnit(manufacturingUnitId);
  }

  public async createManufacturingUnit(): Promise<ManufacturingUnit> {
    return await createManufacturingUnitUseCase.createManufacturingUnit();
  }

  public async duplicateManufacturingUnit(duplicateManufacturingUnitId: string): Promise<ManufacturingUnit> {
    return await createManufacturingUnitUseCase.createDuplicateManufacturingUnit(duplicateManufacturingUnitId);
  }

  public async deleteManufacturingUnit(manufacturingUnitId: string): Promise<void> {
    return deleteManufacturingUnitUseCase.deleteManufacturingUnit(manufacturingUnitId);
  }

  public async editManufacturingUnit(manufacturingUnitId: string, newValues: Map<string, string>): Promise<ManufacturingUnit> {
    return await editManufacturingUnitUseCase.edit(manufacturingUnitId, newValues);
  }
}

export default ManufacturingUnitsService;
