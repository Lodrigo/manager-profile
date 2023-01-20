import * as mongoose from 'mongoose';

export const UsersSchemas = new mongoose.Schema({
    firstName: String,
    lastName: String
});