import { IMatchListItem } from '@shared/models/match/match-list-item.model';

export interface IPlayerItem {
    countGoals: string;
    id: number;
    loseRate: string;
    matches: IMatchListItem[];
    name: string;
    winRate: string;
    goals: { matchId: number; countGoals: string }[];
}
