import { Module } from "@nestjs/common";
import { AuthorsResolver } from "./authors.resolver";
import { AuthorsService } from "./authors.service";
import { PostsService } from "./../post/posts.service";
import { authorsProviders } from "./authors.providers";
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        AuthorsResolver,
        AuthorsService,
        PostsService,
        ...authorsProviders
    ]
})

export class AuthorModule {}