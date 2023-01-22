import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    
 }

 //https://stackoverflow.com/questions/68390441/nestjs-graphql-passport-getting-unauthorised-error-from-guard
// @Injectable()
// export class LocalGqlAuthGuard extends AuthGuard('local') {
//     constructor() {
//         super();
//     }
//     getRequest(context: ExecutionContext) {
//         const ctx = GqlExecutionContext.create(context);
//         const req = ctx.getContext().req;
//         req.body = ctx.getArgs();
//         return req;
//     }
//     async canActivate(context: ExecutionContext) {
//         await super.canActivate(context);
//         const ctx = GqlExecutionContext.create(context);
//         const req = ctx.getContext().req;
//         await super.logIn(req);
//         return true;
//     }
// }