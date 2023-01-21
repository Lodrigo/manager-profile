import * as mongoose from 'mongoose';

export const UsersSchemas = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
    type: String,
});