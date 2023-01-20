import { Document } from 'mongoose';

export interface Content extends Document {
    readonly id: string,
    readonly name: string,
    readonly description: string,
    readonly type: string
}