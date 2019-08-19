import { IEntity } from '@shared/models/entity.model';
import { IPlayer } from '@shared/models/player/player.model';

export interface IMatchGoalItem extends IEntity {
    player: IPlayer;
}
