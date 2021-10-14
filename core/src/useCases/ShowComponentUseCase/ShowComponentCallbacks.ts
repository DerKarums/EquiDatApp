import { Component } from "../../entities/Component";

export interface ShowComponentCallbacks {
    setComponent(component: Component): void;
}
