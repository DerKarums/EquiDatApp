import Component from "../../entities/Component";

export default interface ShowComponentCallbacks {
    setComponent(component: Component): void;
}
