import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { NewContentInput } from './dto/new-content.input';
import { UpdateContentInput } from './dto/update-content.input';
// import { Content } from './interfaces/content.interface';
import { Content } from './models/contents.model';

@Injectable()
export class ContentsService {
    constructor(
        @Inject('CONTENT_MODEL')
        private contentModel: Model<Content>,
    ) { }

    async create(data: NewContentInput): Promise<Content> {
        try {
            return await this.contentModel.create(data);
        } catch (error) {
            return error
        }
    }

    async update(data: UpdateContentInput): Promise<Content> {
        try {
            return await this.contentModel.findOneAndUpdate({_id: data.id}, data,);
        } catch (error) {
            return error
        }
    }

    async findOneById(id: string): Promise<Content> {
        try {
            return await this.contentModel.findById(id);
        } catch (error) {
            return error;
        }
    }

    async findAll(): Promise<Content[]> {
        try {
            return await this.contentModel.find();
        } catch (error) {
            return error;
        }
    }

    async remove(id: string): Promise<boolean> {
        try {
            const deleted = await this.contentModel.deleteOne({ _id: id });
            return !!deleted;
        } catch (error) {
            return error;
        }
    }
}