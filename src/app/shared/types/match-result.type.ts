import { MatchResultEnum } from '@shared/enums/match-result.enum';

export type MatchResultType =
    MatchResultEnum.DRAW
    | MatchResultEnum.SECOND_WINNER
    | MatchResultEnum.FIRST_WINNER
    ;
