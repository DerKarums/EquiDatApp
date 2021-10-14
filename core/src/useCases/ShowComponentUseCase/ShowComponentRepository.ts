import Component from '../../entities/Component';

export default interface ShowComponentRepository {
    getComponent(id: string): Component;
}
