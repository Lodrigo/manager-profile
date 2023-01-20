import { Document } from 'mongoose';

export interface Author extends Document {
    readonly id: number,
    readonly firstName?: string,
    readonly lastName?: string,
}