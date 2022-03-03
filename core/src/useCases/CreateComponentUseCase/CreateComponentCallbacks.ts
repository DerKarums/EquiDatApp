import { ComponentType } from "../../entities";


export interface CreateComponentCallbacks {
    setComponentTypes(componentTypes: ComponentType[]): void;
    onDuplicateComplete(): void;
    onCreateComplete(): void;
}