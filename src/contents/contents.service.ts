import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { NewContentInput } from './dto/new-content.input';
import { Content } from './interfaces/content.interface';

@Injectable()
export class ContentsService {
    constructor(
        @Inject('CONTENT_MODEL')
        private contentModel: Model<Content>,
    ) { }

    async create(data: NewContentInput): Promise<Content> {
        const result =  await this.contentModel.create(data);
        return result;
    }

    async findOneById(id: string): Promise<Content> {
        return await this.contentModel.findById(id);
    }

    async findAll(): Promise<Content[]> {
        return await this.contentModel.find();
    }

    async remove(id: string): Promise<boolean> {
        const deleted = await this.contentModel.deleteOne({ _id: id });
        console.log("deletou", deleted);
        console.log("!!deleted", !!deleted);
        return !!deleted;
    }
}