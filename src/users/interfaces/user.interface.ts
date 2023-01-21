import { Document } from 'mongoose';
import { UserTypes } from 'src/shared/enums/user-types.enums';

export interface User extends Document {
    readonly id: string,
    readonly username: string,
    readonly password: string,
    readonly type: string,
}