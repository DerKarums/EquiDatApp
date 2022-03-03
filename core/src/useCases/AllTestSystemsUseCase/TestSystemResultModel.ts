

export default class TestSystemResultModel {

  /**
   * @param id ID of TestSystem
   * @param systemPropertyValues Map of <PropertyName, PropertyValue>
   */
  constructor(
    readonly id: string,
    readonly systemPropertyValues: Map<string, string | null>,
  ) { }
}