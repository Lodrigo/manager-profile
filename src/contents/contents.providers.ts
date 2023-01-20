import { Mongoose } from 'mongoose';
import { ContentsSchemas } from './schemas/contents.schemas';

export const contentsProviders = [
    {
        provide: 'CONTENT_MODEL',
        useFactory: (mongoose: Mongoose) => mongoose.model('Contents', ContentsSchemas),
        inject: ['DATABASE_CONNECTION'],
    },
];