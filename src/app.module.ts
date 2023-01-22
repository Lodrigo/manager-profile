import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from './guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { ContentModule } from './contents/contents.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';

@Module({
  imports: [
    ContentModule,
    MongooseModule.forRoot('mongodb://localhost/profiles_manager', { dbName: "profiles_manager" }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    AuthModule,
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AppService,
    // GUARD PURO
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // }
    // GUARD COM JWT
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
    // GUARD LOCAL SEM JWT
    // {
    //   provide: APP_GUARD,
    //   useClass: LocalAuthGuard,
    // }
    
  ],
})
export class AppModule {}
