import Component from "../../entities/Component";

export default interface ShowComponentCallbacks {
    onComponentFetched(component: Component): void;
}
