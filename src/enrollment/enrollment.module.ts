import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Enrollment } from './enrollment.model.js';
import { EnrollmentService } from './enrollment.service.js';
import { EnrollmentController } from './enrollment.controller.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [SequelizeModule.forFeature([Enrollment]), AuthModule],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
})
export class EnrollmentModule {}
