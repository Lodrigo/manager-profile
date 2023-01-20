import * as mongoose from 'mongoose';

export const PostsSchemas = new mongoose.Schema({
    id: Number,
    title: String,
    votes: String,
    authorId: Number
});