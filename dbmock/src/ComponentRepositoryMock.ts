import Component from "../../core/src/entities/Component";
import SystemProperty from "../../core/src/entities/SystemProperty";
import SystemPropertyType from "../../core/src/entities/SystemPropertyType";
import CreateComponentRepository from "../../core/src/useCases/CreateComponentUseCase/CreateComponentRepository"
import ShowComponentRepository from "../../core/src/useCases/ShowComponentUseCase/ShowComponentRepository"


export default class ComponentRepositoryMock implements CreateComponentRepository, ShowComponentRepository {

    components: Map<string, Component>;

    createComponent(component: Component): void {
        console.log("createComponent");
        this.components.set(component.id, component);
    }

    getComponent(id: string): Component {
        return this.components.get(id);
    }

    getSchema(): SystemProperty[] {
        return [
            new SystemProperty("Name", SystemPropertyType.StringType),
            new SystemProperty("Aufgestellt am", SystemPropertyType.DateType),
            new SystemProperty("Anzahl", SystemPropertyType.NumberType),
        ];
    }
}