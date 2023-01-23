import { Field, ObjectType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@ObjectType({ description: 'Conteúdo' })
export class Content {
    @Field({ nullable: false, description: 'id do conteúdo' })
    id: string;

    @Field({ nullable: false, description: 'nome do conteúdo' })
    @MaxLength(30)
    name: string;

    @Field({ nullable: false, description: 'descrição do conteúdo' })
    @MaxLength(80)
    description: string;

    @MaxLength(3)
    @Field({ nullable: false, description: 'tipo do perfil' })
    type: string;
}