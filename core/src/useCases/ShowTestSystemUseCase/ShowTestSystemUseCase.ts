import ShowTestSystemCallbacks from "./ShowTestSystemCallbacks";
import ShowTestSystemRepository from "./ShowTestSystemRepository";


export default class ShowTestSystemUseCase {

    constructor(
        private readonly repository: ShowTestSystemRepository,
    ) {

    }

    public getTestSystem(id: string, callbacks: ShowTestSystemCallbacks) : void {
        const testSystem = this.repository.getTestSystem(id);
        callbacks.onTestSystemFetched(testSystem);
    }
}
