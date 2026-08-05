import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review } from './review.model.js';
import { ReviewService } from './review.service.js';
import { ReviewController } from './review.controller.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [SequelizeModule.forFeature([Review]), AuthModule],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
