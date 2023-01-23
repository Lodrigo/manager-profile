import { Field, InputType } from '@nestjs/graphql';
import { IsString, MaxLength } from 'class-validator';

@InputType()
export class NewContentInput {
    @IsString()
    @Field({ nullable: false })
    @MaxLength(30)
    name: string;

    @IsString()
    @Field({ nullable: false })
    @MaxLength(80)
    description: string;

    @IsString()
    @MaxLength(3)
    @Field({ nullable: false })
    type: string;
}