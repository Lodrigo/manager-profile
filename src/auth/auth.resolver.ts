import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query } from "@nestjs/graphql";
import { User } from "src/users/models/users.model";
import { LocalAuthGuard } from "./guards/local-auth.guard";

export class AuthResolver {
    // constructor(
    // ) { }

    @Mutation()
    async login() {
        console.log('slajsliajsahskha')
        return true
    }

    // @UseGuards(LocalAuthGuard)
    // @Mutation(() => User, { nullable: true })
    // logIn(
    //     @Args('variables')
    //     _authenticationInput: User,
    //     @Context() context: any, // <----------- it's not request
    // ) {
    //     console.log("logIn")
    //     return context.req.user;
    // }

    @UseGuards(LocalAuthGuard)
    @Query(returns => User)
    async content(@Args('Request') request: Request) {
        console.log(request);
        return request
    }

}