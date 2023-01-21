import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Usuário' })
export class User {
    @Field({ description: 'id do usuário' })
    id: string;

    @Field({ nullable: true, description: 'nome de usuário' })
    username: String;

    @Field({ nullable: true, description: 'senha do usuário' })
    password: String;

    @Field({ nullable: true, description: 'tipo do perfil' })
    type: String;
}