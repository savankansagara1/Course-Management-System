import { SetMetadata } from '@nestjs/common';
import { Role } from '../user/user.model.js';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
