import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profile } from './profile.model.js';
import { ProfileService } from './profile.service.js';
import { ProfileController } from './profile.controller.js';

@Module({
  imports: [SequelizeModule.forFeature([Profile])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
