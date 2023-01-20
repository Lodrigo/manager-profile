import { Connection } from 'mongoose';
import { AuthorsSchemas } from './schemas/authors.schemas';

export const authorsProviders = [
    {
        provide: 'AUTHOR_MODEL',
        useFactory: (connection: Connection) => connection.model('Authors', AuthorsSchemas),
        inject: ['DATABASE_CONNECTION'],
    },
];