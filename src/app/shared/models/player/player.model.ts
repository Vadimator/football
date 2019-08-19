import { IEntity } from '@shared/models/entity.model';

export interface IPlayer extends IEntity {
    isActive: boolean;
    name: string;
}
