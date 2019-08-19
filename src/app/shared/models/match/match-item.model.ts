import { IMatchListItem } from '@shared/models/match/match-list-item.model';
import { FieldModel } from '@shared/models/field/field.model';
import { IMatchGoalItem } from '@shared/models/match/match-goal-item.model';
import { ITeam } from '@shared/models/team/team.model';

export interface IMatchItem extends IMatchListItem {
    field: FieldModel;
    firstTeam: ITeam;
    secondTeam: ITeam;
    goals: IMatchGoalItem[];
}
