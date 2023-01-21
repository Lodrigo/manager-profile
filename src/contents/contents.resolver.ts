import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Content } from "./models/contents.model";
import { ContentsService } from "./contents.service"
import { NewContentInput } from "./dto/new-content.input"
import { UseGuards } from "@nestjs/common/decorators/core/use-guards.decorator";
import { LocalAuthGuard } from "src/auth/guards/local-auth.guard";
import { CurrentUser } from "src/shared/current-user";
import { User } from "src/users/models/users.model";
// import { AuthGuard } from "src/guards/authguards";

@Resolver(of => Content)

export class ContentResolver {
    constructor(
        private contentService: ContentsService,
    ) { }

    @Query(returns => Content)
    // async content(@Args('id') id: string, @CurrentUser() user: User) {
    async content(@Args('id') id: string) {
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
        @Args('newContentData') {...newContentData}: NewContentInput,
    ): Promise<Content> {
        const result = await this.contentService.create(newContentData);
        return result;
    }
    
    @Mutation(returns => Boolean)
    // @UseGuards(LocalAuthGuard)
    async removeContent(@Args('id') id: string) {
        return this.contentService.remove(id);
    }
}