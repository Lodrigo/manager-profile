import { Args, Query, Resolver } from "@nestjs/graphql";
import { User } from "./models/users.model";
import { UserService } from "./users.service"

@Resolver(of => User)

export class UserResolver {
    constructor(
        private userService: UserService,
    ) { }

    @Query(returns => User)
    async author(@Args('id') id: string) {
        const user = await this.userService.findOne(id);
        return user
    }
}