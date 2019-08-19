import { IMatchListItem } from '@shared/models/match/match-list-item.model';

export interface IPlayerItem {
    countGoals: string;
    id: number;
    lostRate: string;
    matches: IMatchListItem[];
    name: string;
    winRate: string;
}
