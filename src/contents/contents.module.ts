import { Module } from "@nestjs/common";
import { ContentResolver } from "./contents.resolver";
import { DatabaseModule } from '../database/database.module';
import { contentsProviders } from "./contents.providers";
import { ContentsService } from "./contents.service";

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        ContentResolver,
        ContentsService,
        ...contentsProviders,
    ]
})

export class ContentModule { }