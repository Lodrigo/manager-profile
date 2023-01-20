import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Content } from "./models/contents.model";
import { ContentsService } from "./contents.service"
import { NewContentInput } from "./dto/new-content.input"

@Resolver(of => Content)

export class ContentResolver {
    constructor(
        private contentService: ContentsService,
    ) { }

    @Query(returns => Content)
    async content(@Args('id') id: string) {
        console.log("content resolver")
        const content = await this.contentService.findOneById(id);
        return content
    }

    @Query(returns => [Content])
    async contents(): Promise<Content[]> {
        console.log("listar resolvers");
        const contents = await this.contentService.findAll() as Content[]
        return contents;
    }

    @Mutation(returns => Content)
    async addContent(
        @Args('newContentData') {...newContentData}: NewContentInput,
    ): Promise<Content> {
        const result = await this.contentService.create(newContentData);
        console.log("add resolvers", result);
        return result;
    }
    
    @Mutation(returns => Boolean)
    async removeRecipe(@Args('id') id: string) {
        console.log("remove content", id)
        return this.contentService.remove(id);
    }
}