import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../../post/models/posts.model';

@ObjectType({description: 'Autor de post'})
export class Author {
    @Field({ description: 'id do autor' })
    id: string;

    @Field({ nullable: true, description: 'Primeiro nome' })
    firstName?: string;

    @Field({ nullable: true, description: 'Último nome' })
    lastName?: string;

    @Field(type => [Post], { description: 'Coleção de autores' })
    posts: Post[];
}