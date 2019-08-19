import { IEntity } from '@shared/models/entity.model';
import { IPlayer } from '@shared/models/player/player.model';

export interface ITeam extends IEntity {
    players: IPlayer[];
}
