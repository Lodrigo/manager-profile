import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
// import { UserTypes } from 'src/shared/enums/user-types.enums';
import { User } from './models/users.model';

// MODO DO SITE export type User = any;
@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<User>,
    ) { }

    private readonly users: User[] = [
        {
            id: "2",
            username: 'carlos',
            password: '1234',
            type: "Administrador"
        },
        {
            id: "2",
            username: 'maria',
            password: '1234',
            type: "Aluno"
        },
    ];

    async findOne(id: string): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }

}