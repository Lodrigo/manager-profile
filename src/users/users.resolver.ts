import { Args, Int, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "./models/users.model";
import { UserService } from "./users.service"
import { PostsService } from "src/post/posts.service";

@Resolver(of => User)

export class UserResolver {
    constructor(
        private userService: UserService,
        private postsService: PostsService,
    ) { }

    @Query(returns => User)
    async author(@Args('id') id: string) {
        const user = await this.userService.findOneById(id);
        return user
    }

    @ResolveField()
    async posts(@Parent() user: User) {
        const { id } = user;
        return this.postsService.findAll({ authorId: id });
    }
}