import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lesson } from './lesson.model.js';
import { LessonService } from './lesson.service.js';
import { LessonController } from './lesson.controller.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [SequelizeModule.forFeature([Lesson]), AuthModule],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
