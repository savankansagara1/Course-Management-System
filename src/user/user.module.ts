import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model.js';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [SequelizeModule.forFeature([User]), AuthModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [SequelizeModule],
})
export class UserModule {}
