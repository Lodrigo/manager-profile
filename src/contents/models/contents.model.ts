import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Conteúdo' })
export class Content {
    @Field({ description: 'id do conteúdo' })
    id: string;

    @Field({ nullable: false, description: 'nome do conteúdo' })
    name: string;

    @Field({ nullable: false, description: 'descrição do conteúdo' })
    description: string;

    @Field({ nullable: false, description: 'tipo do perfil' })
    type: string;
}