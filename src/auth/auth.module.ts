import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model.js';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { JwtGuard } from './jwt.guard.js';
import { RolesGuard } from './roles.guard.js';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      secret: 'super-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtGuard, RolesGuard],
  exports: [JwtGuard, RolesGuard, JwtModule],
})
export class AuthModule {}
