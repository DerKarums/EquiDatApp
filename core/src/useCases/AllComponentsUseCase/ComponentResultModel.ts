
export default class ComponentResultModel {

  /**
   * @param id ID of Component
   * @param systemPropertyValues Map of <PropertyName, PropertyValue>
   */
  constructor(
    readonly id: string,
    readonly systemPropertyValues: Map<string, string | null>,
  ) { }
}