import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserTypes } from 'src/shared/enums/user-types.enums';

@ObjectType({ description: 'Usuário' })
export class User {
    @Field({ description: 'id do usuário' })
    id: string;

    @Field({ nullable: true, description: 'tipo do perfil' })
    type: UserTypes;
}