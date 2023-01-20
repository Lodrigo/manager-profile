import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticationService {
    hasFeatureRightPermission(permissions: string[]) :boolean {
        return true;
        // this.currentUserSubject.subscribe({
        //     next: (userPermissions) => {
        //         this.userPermissions = userPermissions.permissions;
        //     },
        // });

        // return !!permissions.find((permission) => this.userPermissions.includes(permission));
    }
}
