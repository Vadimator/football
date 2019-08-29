import { RoleType } from '@shared/types/role.type';

export class UserModel {
    id: number;
    createdAt: string;
    updatedAt: string;
    username: string;
    role: RoleType;
}
