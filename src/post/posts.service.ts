import { Injectable } from '@nestjs/common';
import { Post } from './models/posts.model';

@Injectable()
export class PostsService {
    /**
     * MOCK
     * Put some real business logic here
     * Left for demonstration purposes
     */

    // async create(data: NewRecipeInput): Promise<Recipe> {
    //     return {} as any;
    // }

    // async findOneById(id: string): Promise<Author> {
    //     return {} as any;
    // }

    async findAll(args: GetPostsArgs): Promise<Post[]> {
        return [{
            id: 1,
            title: "Formoso Gay",
            votes: -10
        }] as Post[];
    }

    // async remove(id: string): Promise<boolean> {
    //     return true;
    // }
}