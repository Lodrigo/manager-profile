import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
// import { Author } from './models/author.model';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
    /**
     *
     */
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<User>,
    ) { }

    // async create(data: NewRecipeInput): Promise<Recipe> {
    //     return {} as any;
    // }

    async findOneById(id: string): Promise<User> {

        // const result = await this.authorModel.create(
        //     {
        //         firstName: "Carlos",
        //         lastName: "Silva"
        //     }
        // )
        // console.log(result);
        // return result;
        return this.userModel.findById(id).exec();
        // return {
        //     id: 1,
        //     firstName: "Carlos",
        //     lastName: "Lourenço"
        // } as Author;
    }

    // async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    //     return [] as Recipe[];
    // }

    // async remove(id: string): Promise<boolean> {
    //     return true;
    // }
}