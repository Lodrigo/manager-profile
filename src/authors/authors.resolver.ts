import { Args, Int, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Author } from "./models/author.model";
import { AuthorsService } from "./authors.service"
import { PostsService } from "src/post/posts.service";
import { RolesGuard } from "src/guards/roles.guard";
import { Roles } from "src/shared/custom_decorators/rules.decorator";
import { UserTypes } from "src/shared/enums/user-types.enums";

@Resolver(of => Author)

export class AuthorsResolver {
    constructor(
        private authorsService: AuthorsService,
        private postsService: PostsService,
    ) { }

    @Query(returns => Author)
    @Roles(UserTypes.ADMINISTRADOR)
    async author(@Args('id') id: string) {
        console.log("resolver aqui");
        const author = await this.authorsService.findOneById(id);
        return author
    }

    @ResolveField()
    async posts(@Parent() author: Author) {
        const { id } = author;
        return this.postsService.findAll({ authorId: id });
    }
}