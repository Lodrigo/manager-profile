import * as mongoose from 'mongoose';

export const AuthorsSchemas = new mongoose.Schema({
    firstName: String,
    lastName: String
});