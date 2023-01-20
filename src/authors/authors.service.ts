import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
// import { Author } from './models/author.model';
import { Author } from './interfaces/author.interface';

@Injectable()
export class AuthorsService {
    /**
     *
     */
    constructor(
        @Inject('AUTHOR_MODEL')
        private authorModel: Model<Author>,
    ) {}

    // async create(data: NewRecipeInput): Promise<Recipe> {
    //     return {} as any;
    // }

    async findOneById(id: string): Promise<Author> {
        
        // const result = await this.authorModel.create(
        //     {
        //         firstName: "Rodrigo",
        //         lastName: "Lourenço"
        //     }
        // )
        // console.log(result);
        // return result;
        console.log('findone');
        return this.authorModel.findById(id).exec();
        // return {
        //     id: 1,
        //     firstName: "Rodrigo",
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