import { FieldModel } from '../../field/models/field.model';

export class MatchModel {
    id: string;
    createdDate: string;
    duration: number; // minutes
    score: string;
    field: FieldModel = new FieldModel();
}
