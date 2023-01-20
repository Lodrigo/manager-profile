import * as mongoose from 'mongoose';

export const ContentsSchemas = new mongoose.Schema({
    name: String,
    description: String,
    type: String
});