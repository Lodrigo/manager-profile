import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { IS_PUBLIC_KEY } from "src/shared/custom_decorators/set-metadatas";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(ctx: ExecutionContext) {
        // const context = GqlExecutionContext.create(ctx);
        // console.log('userrrrrrrrrrrrrrr', user)
        // return context.getContext().req;

        const context = GqlExecutionContext.create(ctx);
        const user = GqlExecutionContext.create(ctx).getContext().user

        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        console.log('isPublic', isPublic)

        if (isPublic) {
            return true;
        }
        const { req } = context.getContext();

        return super.canActivate(new ExecutionContextHost([req])); // NOTE
        
        // console.log('jwtauth', context)
        // const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        //     context.getHandler(),
        //     context.getClass(),
        // ]);
        // console.log('é publico?', isPublic)
        // if (isPublic) {
        //     return true;
        // }
        // return super.canActivate(context);
    }
}
