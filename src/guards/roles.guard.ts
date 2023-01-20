import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        // const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
        //     context.getHandler(),
        //     context.getClass(),
        // ]);

        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        console.log('ROLESGUARD', roles)
        if (!roles) {
            console.log('true guard')
            return true;
        }
        // const request = context.switchToHttp().getRequest();
        // const user = request.user;
        // return matchRoles(roles, user.roles);
        console.log('false guard')
        return true
    }
}
