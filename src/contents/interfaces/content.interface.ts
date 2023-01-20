import { Document } from 'mongoose';

export interface Content extends Document {
    id: string,
    name: string,
    description: string,
    type: string
}