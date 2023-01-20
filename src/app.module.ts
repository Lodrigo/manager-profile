import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthorModule } from './authors/authors.module';
import { PostsModule } from './post/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from './guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { ContentModule } from './contents/contents.module';

@Module({
  imports: [
    AuthorModule,
    ContentModule,
    PostsModule,
    MongooseModule.forRoot('mongodb://localhost/profiles_manager', { dbName: "profiles_manager" }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: true,
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }
  ],
})
export class AppModule {}
