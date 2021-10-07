import ShowComponentCallbacks from "./ShowComponentCallbacks";
import ShowComponentRepository from "./ShowComponentRepository";


export default class ShowComponentUseCase {

    constructor(
        private readonly repository: ShowComponentRepository,
    ) {

    }

    public getComponent(id: string, callbacks: ShowComponentCallbacks) : void{
        const component = this.repository.getComponent(id);
        callbacks.setComponent(component);
    }
}
