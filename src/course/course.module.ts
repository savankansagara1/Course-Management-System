import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Course } from './course.model.js';
import { CourseService } from './course.service.js';
import { CourseController } from './course.controller.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [SequelizeModule.forFeature([Course]), AuthModule],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
