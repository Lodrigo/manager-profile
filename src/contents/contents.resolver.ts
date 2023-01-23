import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Content } from "./models/contents.model";
import { ContentsService } from "./contents.service"
import { NewContentInput } from "./dto/new-content.input"
import { UpdateContentInput } from "./dto/update-content.input";

@Resolver(of => Content)

export class ContentResolver {
    constructor(
        private contentService: ContentsService,
    ) { }

    @Query(returns => Content)
    async content(@Args('id') id: string): Promise<Content> {
        const content = await this.contentService.findOneById(id);
        return content
    }

    @Query(returns => [Content])
    async contents(): Promise<Content[]> {
        const contents = await this.contentService.findAll() as Content[]
        return contents;
    }

    @Mutation(returns => Content)
    async addContent(
        @Args('newContentData') { ...newContentData }: NewContentInput,
    ): Promise<Content> {
        const result = await this.contentService.create(newContentData);
        console.log(result, "resultado")
        return result;
    }

    @Mutation(returns => Content)
    async updateContent(
        @Args('contentData') {...inputContentData}: UpdateContentInput,
    ): Promise<Content> {
        const result = await this.contentService.update(inputContentData);
        console.log(result, "resultado")
        return result;
    }
    
    @Mutation(returns => Boolean)
    async removeContent(@Args('id') id: string) {
        return this.contentService.remove(id);
    }
}