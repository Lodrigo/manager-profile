import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewContentInput {
    @Field({ nullable: false })
    name: string;

    @Field({ nullable: false })
    description: string;

    @Field({ nullable: false })
    type: string;
}