import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query } from "@nestjs/graphql";
import { User } from "src/users/models/users.model";
import { LocalAuthGuard } from "./guards/local-auth.guard";

export class ContentResolver {
    // constructor(
    // ) { }
    
    // @Post('auth/login')
    // async login(@Request() req) {
    //     return req.user;
    // }

    @UseGuards(LocalAuthGuard)
    @Query(returns => User)
    async content(@Args('Request') request: Request) {
        console.log(request);
        return request
    }

}