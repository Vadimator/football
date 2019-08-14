import { UserModel } from '@shared/models/user/user.model';

export class TokenModel extends UserModel {
    token: string;
}
