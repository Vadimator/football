import { MatchResultType } from '@shared/types/match-result.type';
import { IEntity } from '@shared/models/entity.model';

export interface IMatchListItem extends IEntity {
    date: string;
    duration: number;
    firstScore: number;
    result: MatchResultType;
    secondScore: number;
}
