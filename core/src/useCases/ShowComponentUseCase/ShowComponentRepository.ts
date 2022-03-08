import { Component } from '../../entities/Component';

export interface ShowComponentRepository {
    getComponent(id: string): Promise<Component>;
}
