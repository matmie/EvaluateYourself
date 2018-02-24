import { IRole } from './role';

export interface IUser {
    firstName?: string;
    lastName?: string;
    role?: IRole;
    userId: number;
    email: string;
    password: string;
}

export class User implements IUser {
    firstName?: string;
    lastName?: string;
    role?: IRole;
    userId: number;
    email: string;
    password: string;
}