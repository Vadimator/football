import { IPlayerListItem } from '@shared/models/player/player-list-item.model';

export interface IPlayerListResponse {
    count: number;
    entities: IPlayerListItem[];
}
