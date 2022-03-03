
export default class ManufacturingUnitResultModel {

  /**
   * @param id ID of ManufacturingUnit
   * @param systemPropertyValues Map of <PropertyName, PropertyValue>
   */
  constructor(
    readonly id: string,
    readonly systemPropertyValues: Map<string, string | null>,
  ) { }
}