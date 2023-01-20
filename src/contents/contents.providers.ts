import { Connection } from 'mongoose';
import { ContentsSchemas } from './schemas/contents.schemas';

export const contentsProviders = [
    {
        provide: 'CONTENT_MODEL',
        useFactory: (connection: Connection) => connection.model('Contents', ContentsSchemas),
        inject: ['DATABASE_CONNECTION'],
    },
];