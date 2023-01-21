import { Module } from "@nestjs/common";
import { UserResolver } from "./users.resolver";
import { DatabaseModule } from '../database/database.module';
import { UserService } from "./users.service";
import { usersProviders } from "./users.providers";

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        UserService,
        UserResolver,
        ...usersProviders
    ],
    exports: [UserService]
})

export class UsersModule { }