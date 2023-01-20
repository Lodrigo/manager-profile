import { Connection } from 'mongoose';
import { UsersSchemas } from './schemas/users.schemas';

export const usersProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: Connection) => connection.model('Users', UsersSchemas),
        inject: ['DATABASE_CONNECTION'],
    },
];