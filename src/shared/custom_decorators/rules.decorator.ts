import { SetMetadata } from '@nestjs/common';
import { UserTypes } from '../enums/user-types.enums';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);