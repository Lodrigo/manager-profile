import { Connection } from 'mongoose';
import { PostsSchemas } from './schemas/posts.schemas';

export const authorsProviders = [
    {
        provide: 'POST_MODEL',
        useFactory: (connection: Connection) => connection.model('Posts', PostsSchemas),
        inject: ['DATABASE_CONNECTION'],
    },
];